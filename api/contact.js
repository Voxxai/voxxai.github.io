/**
 * Vercel Serverless Function: Discord Contact Form Handler
 *
 * This function securely forwards contact form submissions to Discord via Webhook.
 * The DISCORD_WEBHOOK_URL is stored server-side and never exposed to the client.
 */

export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // Extract form data from request body
  const { name, email, message } = req.body;

  // Validate required fields
  if (!name || !email || !message) {
    return res.status(400).json({ error: "Missing required fields: name, email, message" });
  }

  // Validate email format (basic validation)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email format" });
  }

  // Get Discord Webhook URL from environment variables
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("DISCORD_WEBHOOK_URL is not configured");
    return res.status(500).json({ error: "Server configuration error" });
  }

  try {
    // Format the message for Discord
    const discordMessage = {
      content: "@everyone 📨 **New Contact Form Submission**",
      embeds: [
        {
          title: "🚀 New Message from Portfolio",
          color: 16718874, // Cyan/neon color
          fields: [
            {
              name: "👤 Name",
              value: name,
              inline: true,
            },
            {
              name: "📧 Email",
              value: email,
              inline: true,
            },
            {
              name: "💬 Message",
              value: message,
              inline: false,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Portfolio Contact Form",
          },
        },
      ],
    };

    // Send the message to Discord
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(discordMessage),
    });

    // Check if Discord responded successfully
    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Discord API error: ${response.status} - ${errorText}`);
      return res.status(500).json({ error: "Failed to send message to Discord" });
    }

    // Success response
    return res.status(200).json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Error sending Discord message:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
