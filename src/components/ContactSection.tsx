import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
// import emailjs from '@emailjs/browser';
import * as z from "zod";
// import { useSubmitContact } from "@workspace/api-client-react";
import { Send, Mail, MapPin, TerminalSquare } from "lucide-react";
// import { useToast } from "@/hooks/use-toast";
import { Button } from "./ui/button";
// import { body } from "framer-motion/client";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactSection() {
  // const { toast } = useToast();
  const form = useRef(null);
  const [isFocused, setIsFocused] = useState<string | null>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  // const form = useRef();

  const onSubmit = (data: FormData) => {
    // submitContact({ data });
  };

  const sendEmail = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_n07mqt7",
        "template_yoevjgx",
        form.current,
        "Fy8LQv4ugekQOoQxA",
      )
      .then(
        (result) => {
          console.log("Email sent!");
          setIsLoading(false);
          setIsSent(false);
        },
        (error) => console.log(error.text),
      );
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Info Side */}
          <div className="w-full lg:w-5/12">
            <h2 className="text-sm font-mono text-accent uppercase tracking-widest mb-2">
              Network // Comms
            </h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">
              Initiate <span className="text-gradient">Protocol</span>
            </h3>

            <p className="text-muted-foreground mb-12 leading-relaxed">
              Currently open for new opportunities, freelance projects, or just
              a technical discussion. Send a transmission and I'll get back to
              you as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-primary group-hover:bg-primary/20 transition-colors shadow-inner">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono">
                    Email
                  </div>
                  <div className="text-foreground font-medium">
                    muhannadafeefe654@gmail.com
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl glass-panel flex items-center justify-center text-accent group-hover:bg-accent/20 transition-colors shadow-inner">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-mono">
                    Location
                  </div>
                  <div className="text-foreground font-medium">
                    Latakia, Syria
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-7/12 glass-panel p-8 rounded-3xl border border-white/10 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 p-4 opacity-20">
              <TerminalSquare className="w-24 h-24 text-primary" />
            </div>

            <form
              ref={form}
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 relative z-10"
            >
              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Name
                </label>
                <input
                  {...register("name")}
                  onFocus={() => setIsFocused("name")}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setName(e.target.value)}
                  className={`w-full bg-black/40 border ${errors.name ? "border-destructive" : isFocused === "name" ? "border-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]" : "border-white/10"} rounded-xl px-4 py-3 text-foreground focus:outline-none transition-all duration-300`}
                  placeholder="Your name goes here"
                />
                {errors.name && (
                  <p className="text-destructive text-xs font-mono">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Email
                </label>
                <input
                  {...register("email")}
                  onFocus={() => setIsFocused("email")}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full bg-black/40 border ${errors.email ? "border-destructive" : isFocused === "email" ? "border-primary shadow-[0_0_10px_hsl(var(--primary)/0.3)]" : "border-white/10"} rounded-xl px-4 py-3 text-foreground focus:outline-none transition-all duration-300`}
                  placeholder="example@exmaple.com"
                />
                {errors.email && (
                  <p className="text-destructive text-xs font-mono">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  Message
                </label>
                <textarea
                  {...register("message")}
                  onFocus={() => setIsFocused("message")}
                  onBlur={() => setIsFocused(null)}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  className={`w-full bg-black/40 border ${errors.message ? "border-destructive" : isFocused === "message" ? "border-accent shadow-[0_0_10px_hsl(var(--accent)/0.3)]" : "border-white/10"} rounded-xl px-4 py-3 text-foreground focus:outline-none transition-all duration-300 resize-none`}
                  placeholder="Enter your wish..."
                />
                {errors.message && (
                  <p className="text-destructive text-xs font-mono">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={false}
                className="w-full h-14 text-lg group"
                onClick={(e) => sendEmail(e)}
              >
                {!isSent && !isLoading && (
                  <span className="flex items-center">
                    Email Sent Successfully
                  </span>
                )}
                {isSent && !isLoading && (
                  <span className="flex items-center">
                    Send{" "}
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </span>
                )}
                {isLoading && (
                  <span className="flex items-center">Transmitting...</span>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
