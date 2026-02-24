'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Card } from '@/components/ui/Card';
import { Send, Mail, User as UserIcon, MessageSquare } from 'lucide-react';
import { Page } from '../types/pages';

interface ContactProps {
  onNavigate: (page: Page) => void;
}

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const COOLDOWN_KEY = 'voxxai_contact_cooldown';
const COOLDOWN_DURATION = 60000; // 60 seconds

export const Contact: React.FC<ContactProps> = ({ onNavigate }) => {
  const [cooldownRemaining, setCooldownRemaining] = useState(0);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    const checkCooldown = () => {
      const lastSubmit = localStorage.getItem(COOLDOWN_KEY);
      if (lastSubmit) {
        const elapsed = Date.now() - parseInt(lastSubmit);
        const remaining = Math.max(0, COOLDOWN_DURATION - elapsed);
        setCooldownRemaining(remaining);
      }
    };

    checkCooldown();
    const interval = setInterval(checkCooldown, 1000);
    return () => clearInterval(interval);
  }, []);

  const onSubmit = async (data: ContactFormData) => {
    if (cooldownRemaining > 0) return;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitStatus('success');
        localStorage.setItem(COOLDOWN_KEY, Date.now().toString());
        setCooldownRemaining(COOLDOWN_DURATION);
        reset();
        setTimeout(() => setSubmitStatus('idle'), 5000);
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <main className="relative z-10">
      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="mb-16">
          <h1 className="text-5xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-xl text-slate-300">
            I'm always interested in discussing new projects, collaboration opportunities, or just tech.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Email Card */}
          <a
            href="mailto:gilkranendonk@gmail.com"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Card variant="hoverGlow" className="relative">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-2xl font-bold text-white mb-2">Email</h3>
              <p className="text-slate-300 mb-4">
                Send me a message directly. I'll get back to you as soon as I can.
              </p>
              <span className="inline-flex items-center gap-2 text-neonRed font-semibold group-hover:text-white transition">
                gilkranendonk@gmail.com →
              </span>
            </Card>
          </a>

          {/* GitHub Card */}
          <a
            href="https://github.com/Voxxai"
            target="_blank"
            rel="noreferrer"
            className="group relative"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-br from-neonRed/30 to-transparent rounded-xl blur opacity-0 group-hover:opacity-100 transition duration-300" />
            <Card variant="hoverGlow" className="relative">
              <div className="text-4xl mb-4">📦</div>
              <h3 className="text-2xl font-bold text-white mb-2">GitHub</h3>
              <p className="text-slate-300 mb-4">
                Check out my open-source projects and contributions.
              </p>
              <span className="inline-flex items-center gap-2 text-neonRed font-semibold group-hover:text-white transition">
                View Profile →
              </span>
            </Card>
          </a>
        </div>

        {/* Contact Form */}
        <Card className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Quick Contact</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <UserIcon size={16} />
                Name
              </label>
              <input
                {...register('name')}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-neonRed transition-colors ${
                  errors.name ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="Your name"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-400">{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <Mail size={16} />
                Email
              </label>
              <input
                {...register('email')}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-neonRed transition-colors ${
                  errors.email ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="your@email.com"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-400">{errors.email.message}</p>
              )}
            </div>

            {/* Message Field */}
            <div>
              <label className="flex items-center gap-2 text-sm font-medium mb-2">
                <MessageSquare size={16} />
                Message
              </label>
              <textarea
                {...register('message')}
                rows={5}
                className={`w-full px-4 py-3 bg-white/5 border rounded-lg focus:outline-none focus:border-neonRed transition-colors resize-none ${
                  errors.message ? 'border-red-500' : 'border-white/10'
                }`}
                placeholder="Your message..."
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-400">{errors.message.message}</p>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || cooldownRemaining > 0}
              className="w-full py-3 bg-neonRed rounded-lg font-semibold flex items-center justify-center gap-2 hover:shadow-[0_0_30px_rgba(255,8,68,0.5)] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed text-black"
            >
              {isSubmitting ? (
                'Sending...'
              ) : cooldownRemaining > 0 ? (
                `Wait ${Math.ceil(cooldownRemaining / 1000)}s`
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p className="text-center text-green-400">Message sent successfully! 🎉</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-center text-red-400">Failed to send message. Please try again.</p>
            )}
          </form>
        </Card>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          <button
            onClick={() => onNavigate('projects')}
            className="px-8 py-3 rounded-lg bg-neonRed text-black font-semibold hover:bg-white transition shadow-glowRed"
          >
            View My Work
          </button>
          <button
            onClick={() => onNavigate('about')}
            className="px-8 py-3 rounded-lg border border-white/30 text-white font-semibold hover:border-neonRed hover:text-neonRed transition"
          >
            Learn About Me
          </button>
        </div>
      </section>
    </main>
  );
};
