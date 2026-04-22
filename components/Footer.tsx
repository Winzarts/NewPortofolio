export function Footer() {
  const socials = [
    { name: "GitHub", url: "https://github.com/Winzarts" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/prayoga-majasta-mahendra-563b66404/" },
    { name: "Instagram", url: "https://www.instagram.com/winzartskmb/" },
    { name: "Facebook", url: "https://www.facebook.com/winzarts" },
  ];

  const contacts = [
    { name: "Email", value: "prayogamajastam9@gmail.com", url: "mailto:prayogamajastam9@gmail.com" },
    { name: "WhatsApp", value: "089515947987", url: "https://wa.me/6289515947987" }
  ];

  return (
    <footer id="contact" className="py-12 border-t border-foreground/10 bg-background mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 md:px-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 md:gap-12">
          {/* Text and Direct Contacts */}
          <div className="space-y-4">
            <div className="space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Let&apos;s Connect</h2>
              <p className="text-foreground/60 text-sm">
                Feel free to reach out for collaborations or just a friendly chat.
              </p>
            </div>
            
            <div className="flex flex-col space-y-1">
              {contacts.map((contact) => (
                <div key={contact.name} className="text-sm">
                  <span className="font-semibold text-foreground/80 mr-2">{contact.name}:</span>
                  <a href={contact.url} target="_blank" rel="noreferrer" className="text-foreground/60 hover:text-blue-500 transition-colors">
                    {contact.value}
                  </a>
                </div>
              ))}
            </div>
          </div>
          
          {/* Social Media Buttons */}
          <div className="flex justify-start md:justify-end flex-wrap gap-4 max-w-sm">
            {socials.map((social) => (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-full border border-foreground/10 bg-foreground/5 text-sm font-medium hover:border-blue-500 hover:text-blue-500 transition-colors"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-foreground/5 text-center text-foreground/40 text-sm">
          &copy; {new Date().getFullYear()} Prayoga Majasta Mahendra. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
