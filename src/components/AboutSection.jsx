import { BookOpenCheck, Briefcase, Bug, Code, Mountain, User } from "lucide-react";

export const AboutSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            {" "}
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary"> Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">
                            Passionate Learner
                        </h3>

                        <p className="text-muted-foreground">
                            I've fully embraced my identity as an ECE student with a serious software obsession, 
                            living permanently on the blurred line where hardware meets code.My primary mission is to take an abstract concept and,
                             through sheer force of will (and 40 tabs of documentation),
                             turn it into a functional system that doesn't immediately catch fire.
                        </p>

                        <p className="text-muted-foreground">
                           Right now, I'm meticulously building my foundations—viewing every academic principle as a necessary evil
                            before I can get back to breaking things in my next prototype. I find true excitement in the process of debugging,
                             which is really just me shouting at a circuit until it randomly works. My ultimate goal is to master both domains,
                              merge the physical and digital worlds,
                            and maybe finally build a smart toaster that respects my sleep schedule. 
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                {" "}
                                Get In Touch
                            </a>
        
                            <a
                                href="/resume.pdf" target="_blank"
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mountain className="h-6 w-6 text-primary" />

                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg"> Current Engagements</h4>
                                    <p className="text-muted-foreground">
                                        Pursuing my bachelors degree in Electronics and communication engineering from National Institute of Technology,Hamirpur.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Bug    className="h-6 w-6 text-primary" />
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Problem Solver</h4>
                                    <p className="text-muted-foreground">
                                        Recognizing that every hour spent staring at broken code or a faulty circuit is just character development.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <BookOpenCheck className="h-6 w-6 text-primary" />
                                </div>
        
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Avid Learner</h4>
                                    <p className="text-muted-foreground">
                                        I possess a strong eagerness to absorb new concepts quickly, continuously seeking out tutorials, 
                                        , and coursework to rapidly build proficiency in both hardware and software domains.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};