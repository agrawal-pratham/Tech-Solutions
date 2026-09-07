export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({
      success: false,
      message: `Method ${req.method} Not Allowed`,
    });
  }

  try {
    const { name, email, phone, subject, service, message } = req.body || {};

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return res.status(400).json({
        success: false,
        message: "Please provide your name.",
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email.trim())) {
      return res.status(400).json({
        success: false,
        message: "Please provide a valid email address.",
      });
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return res.status(400).json({
        success: false,
        message: "Please enter a message of at least 5 characters.",
      });
    }

    // Generate reference tracking code
    const refId = `TS-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;

    console.log("[Contact Form Submission Received]:", {
      refId,
      name: name.trim(),
      email: email.trim(),
      phone: phone ? phone.trim() : "N/A",
      service: service || "General Inquiry",
      subject: subject ? subject.trim() : "General Inquiry",
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    });

    return res.status(200).json({
      success: true,
      message: "Thank you for reaching out! We have received your message and will get back to you within 24 hours.",
      refId,
      details: {
        name: name.trim(),
        email: email.trim(),
        service: service || "General Inquiry",
        timestamp: new Date().toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
      },
    });
  } catch (error) {
    console.error("Error processing contact submission:", error);
    return res.status(500).json({
      success: false,
      message: "An unexpected error occurred while sending your message. Please try again later.",
    });
  }
}
