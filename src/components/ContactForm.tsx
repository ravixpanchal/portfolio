import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Send, User, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      // Initialize EmailJS with public key
      emailjs.init("YOUR_PUBLIC_KEY"); // You'll need to replace this with your actual public key
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: 'ravi.panchal.kaithi@gmail.com'
      };

      await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your service ID
        'YOUR_TEMPLATE_ID', // Replace with your template ID
        templateParams
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      
      // Fallback to mailto as backup
      const mailtoLink = `mailto:ravi.panchal.kaithi@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
      window.location.href = mailtoLink;
      
      toast({
        title: "Opening email client",
        description: "Your message will open in your default email client.",
      });
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
          
          <Button type="submit" className="w-full" variant="terminal">
            <Send className="h-4 w-4 mr-2" />
            Send Message
          </Button>
          
          <div className="text-center text-sm text-muted-foreground">
            Direct email: <span className="text-primary font-mono">ravi.panchal.kaithi@gmail.com</span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};