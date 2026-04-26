import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ onToast }) {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const showToast = (type, message) => {
    if (typeof onToast === "function") {
      onToast(type, message);
    }
  };

  const handleSend = async () => {
    if (!form.email || !form.subject || !form.message) {
      showToast("error", "Please fill in all required fields.");
      return;
    }

    try {
      setIsSending(true);
      await emailjs.send(
        "service_myi8bbt",
        "template_fx14map",
        {
          name: form.name || "Portfolio Visitor",
          email: "ashquinas@gmail.com",
          reply_to: form.email,
          from_name: form.name || "Portfolio Visitor",
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "ean5XXOn_8xezbduw"
      );
      showToast("success", "Thank you for reaching out! I will get back to you soon.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      showToast("error", "Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="relative flex items-center min-h-[78vh] lg:min-h-[82vh] py-10 lg:py-14">
      <div className="section-line hidden lg:block absolute left-[200px] top-0 bottom-0 w-px bg-[#3D3367] z-0" />

      <div className="px-6 sm:px-8 lg:pl-[210px] lg:pr-12 lg:translate-y-[120px]">
        <div className="relative z-10 flex items-center gap-3 mb-6">
          {/* Diamond */}
          <div className="hidden lg:block flex-shrink-0 lg:-ml-[22px] xl:-ml-[22px] 2xl:-ml-[29px] relative z-10 px-[1px]">
            <svg className="w-5 h-5 lg:w-6 lg:h-6 2xl:w-7 2xl:h-7" viewBox="0 0 14 14">
              <path d="M7 0L8.5 5.5L14 7L8.5 8.5L7 14L5.5 8.5L0 7L5.5 5.5L7 0Z" fill="#7c5fe6" />
            </svg>
          </div>
          <h2 className="font-mono text-[#a78bfa] text-lg sm:text-2xl font-bold tracking-widest">
            Lets Work Together!
          </h2>
        </div>

        {/* Stacked on mobile, equal-height columns on desktop */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 lg:items-stretch gap-4 lg:gap-6">

          {/*Main Form */}
          <div className="border border-[#1e2040] p-4 sm:p-5 bg-[#0a0a1a] flex flex-col h-full rounded-md lg:ml-[18px]">

            <div className="mb-4">
              <label className="font-mono text-gray-400 text-xs block mb-1.5">Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange}
                className="w-full bg-[#0f0f28] border border-[#1e2040] text-white font-mono text-xs px-3 py-2 focus:outline-none focus:border-[#7c5fe6] transition-colors rounded-md" />
            </div>

            <div className="mb-4">
              <label className="font-mono text-gray-400 text-xs block mb-1.5">Subject</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange}
                className="w-full bg-[#0f0f28] border border-[#1e2040] text-white font-mono text-xs px-3 py-2 focus:outline-none focus:border-[#7c5fe6] transition-colors rounded-md" />
            </div>

            <div className="flex flex-col flex-1">
              <label className="font-mono text-gray-400 text-xs block mb-1.5">Message</label>
              <div className="flex flex-col flex-1">
                <textarea name="message" value={form.message} onChange={handleChange} 
                  className="w-full flex-1 min-h-[110px] max-h-[190px] bg-[#0f0f28] border border-[#1e2040] text-white font-mono text-xs px-3 py-2 focus:outline-none focus:border-[#7c5fe6] transition-colors resize-none rounded-md" />
                <button
                  type="button"
                  onClick={handleSend}
                  disabled={isSending}
                  className="mt-3 border border-[#7c5fe6] text-[#a78bfa] font-mono text-xs px-5 py-2 rounded-md hover:bg-[#7c5fe6]/15 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSending ? "Sending..." : "Send"}
                </button>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="flex flex-col gap-4 h-full">
            <div className="border border-[#1e2040] p-5 bg-[#0a0a1a] rounded-md">
              <p className="font-mono text-gray-300 text-xs leading-loose mb-4">
                I'm always open to discussing new opportunities, creative projects, or partnerships.
                Whether you have a specific project in mind or just want to explore possibilities,
                I'd love to connect.
              </p>
              <div className="font-mono text-gray-300 text-xs space-y-1.5">
                <p>• Web &amp; Mobile Development</p>
                <p>• UI/UX Design</p>
                <p>• Speaking &amp; Workshops</p>
              </div>
            </div>

            <div>
              <h3 className="font-mono text-white font-bold text-sm mb-2">Get In Touch</h3>
              <div className="border border-[#1e2040] bg-[#0a0a1a] p-4 rounded-md">
                <div className="space-y-2.5 mb-4">
                  <div className="flex items-center gap-2.5">
                    <MailIcon />
                    <a href="mailto:ashquinas@gmail.com" className="font-mono text-gray-300 text-xs hover:underline">
                      ashquinas@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PhoneIcon />
                    <span className="font-mono text-gray-300 text-xs">+63 993 868 7134</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <PinIcon />
                    <span className="font-mono text-gray-300 text-xs">Legazpi City, Albay, Philippines</span>
                  </div>
                </div>

                {/* Social icons in a row */}
                <div className="flex items-center gap-4 pt-3 border-t border-[#1e2040]">
                  <SocialLink href="https://github.com/aesilee">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </SocialLink>
                  <SocialLink href="https://www.facebook.com/ash.quinas">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </SocialLink>
                  <SocialLink href="https://www.linkedin.com/in/ashley-shad-tongco-b78188263/">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </SocialLink>
                  <SocialLink href="https://t.me/AshQuinas">
                    <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                  </SocialLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

function SocialLink({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-gray-400 hover:text-white transition-colors"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">{children}</svg>
    </a>
  );
}
function MailIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>;
}
function PhoneIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.91a16 16 0 006.72 6.72l1.28-1.28a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>;
}
function PinIcon() {
  return <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>;
}