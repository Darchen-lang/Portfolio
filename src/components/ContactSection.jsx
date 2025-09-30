import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";
export const ContactSection = () => {
  return (
    <section id="contact" className=" flex flex-col items-center justify-center py-24 px-4 relative bg-secondary/30 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="max-w-3xl mx-auto">
          
         
         <div className="flex flex-col gap-12 lg:gap-8 lg:flex-row lg:justify-between lg:w-full">
            
           
            <div className="lg:pr-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Mail className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Email</h4>
                            <a
                                href="mailto:samaksh114@gmail.com"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                samaksh114@gmail.com
                            </a>    
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <Phone className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Phone</h4>
                            <a
                                href="tel:+919317447400"
                                className="text-muted-foreground hover:text-primary transition-colors"
                            >
                                +919317447400
                            </a>
                        </div>
                    </div>
                    <div className="flex items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                            <MapPin className="h-6 w-6 text-primary" />{" "}
                        </div>
                        <div>
                            <h4 className="font-medium"> Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                NIT Hamirpur.
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" lg:pl-8 lg:pt-0 pt-8 ">
                <h4 className="font-medium mb-4 text-2xl font-semibold"> Connect With Me</h4>
                <div className="justify-center flex space-x-4 ">
                    <a href="https://www.linkedin.com/in/samaksh-choudhary-78147334b/" target="_blank">
                        <Linkedin className="h-6 w-6 hover:text-primary transition-colors" />
                    </a>
                    <a href="https://www.instagram.com/_s.a.m.a.k.s.h_?igsh=czZhNWNmMjZlcXM2" target="_blank">
                        <Instagram className="h-6 w-6 hover:text-primary transition-colors" />
                    </a>
                </div>
            </div>

          </div>
        </div> 
      </div>
    </section>
    );
};