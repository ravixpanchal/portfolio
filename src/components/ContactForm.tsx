import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { createClient } from '@supabase/supabase-js';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Primary method: Web3Forms (direct email service)
      const submitFormData = new FormData();
      submitFormData.append('access_key', 'YOUR_WEB3FORMS_ACCESS_KEY'); // You need to get a real key from web3forms.com
      submitFormData.append('name', formData.name);
      submitFormData.append('email', formData.email);
      submitFormData.append('message', formData.message);
      submitFormData.append('subject', `Portfolio Contact: Message from ${formData.name}`);
      submitFormData.append('redirect', 'false');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: submitFormData
      });

      if (response.ok) {
        toast({
          title: "✅ Message sent successfully!",
          description: "Thank you for reaching out! I'll get back to you within 24 hours.",
        });
        
        // Reset form
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Web3Forms service unavailable');
      }
    } catch (error) {
      console.error('Primary email service failed:', error);
      
      // Backup method: EmailJS
      try {
        // Using EmailJS as backup
        const emailJSResponse = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            service_id: 'service_portfolio',
            template_id: 'template_contact',
            user_id: 'user_portfolio_key',
            template_params: {
              from_name: formData.name,
              from_email: formData.email,
              message: formData.message,
              to_email: 'ravi.panchal.kaithi@gmail.com'
            }
          })
        });

        if (emailJSResponse.ok) {
          toast({
            title: "✅ Message sent successfully!",
            description: "Thank you for your message. I'll get back to you soon!",
          });
          setFormData({ name: '', email: '', message: '' });
        } else {
          throw new Error('EmailJS service unavailable');
        }
      } catch (backupError) {
        // Final fallback: Direct HTTP POST to a simple endpoint
        try {
          const fallbackResponse = await fetch('https://formspree.io/f/xpwagjwo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              message: formData.message,
              _subject: `Portfolio Contact from ${formData.name}`,
            })
          });

          if (fallbackResponse.ok) {
            toast({
              title: "✅ Message sent successfully!",
              description: "Your message has been delivered. I'll respond soon!",
            });
            setFormData({ name: '', email: '', message: '' });
          } else {
            throw new Error('All services unavailable');
          }
        } catch (finalError) {
          // Last resort: mailto link
          const subject = encodeURIComponent(`Portfolio Message from ${formData.name}`);
          const body = encodeURIComponent(
            `Hi Ravi,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n\n---\nSent from your portfolio contact form`
          );
          const mailtoLink = `mailto:ravi.panchal.kaithi@gmail.com?subject=${subject}&body=${body}`;
          
          window.open(mailtoLink, '_blank');
          
          toast({
            title: "📧 Email client opened",
            description: "Your message is ready to send via your email app.",
          });
          
          // Don't reset form in this case so user can try again
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="bg-card/50 backdrop-blur-sm border-primary/20">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-primary">
          <Mail className="h-5 w-5" />
          Send me a message
        </CardTitle>
        <p className="text-muted-foreground text-sm">
          Feel free to reach out! Your message will be sent directly to my inbox.
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <User className="h-4 w-4" />
              Name
            </label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
              className="bg-background/50"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Email
            </label>
            <Input
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="bg-background/50"
            />
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <MessageSquare className="h-4 w-4" />
              Message
            </label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message..."
              rows={4}
              required
              className="bg-background/50 resize-none"
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full" 
            variant="terminal"
            disabled={isSubmitting}
          >
            <Send className={`h-4 w-4 mr-2 ${isSubmitting ? 'animate-spin' : ''}`} />
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Direct email: <span className="text-primary font-mono">ravi.panchal.kaithi@gmail.com</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};