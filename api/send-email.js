export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Méthode non autorisée" });
  }

  const { name, email, phone, service, message } = req.body;

  const title = "Nouvelle Demande de Projet via le Site Web";

  const html = `
    <div style="font-family: 'Helvetica, Arial, sans-serif'; color: #2a2765; padding: 20px;">
      <h1 style="font-size: 24px; margin-bottom: 20px;">${title}</h1>
      ${name ? `<p><strong>Nom:</strong> ${name}</p>` : ""}
      ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
      ${phone ? `<p><strong>Téléphone:</strong> ${phone}</p>` : ""}
      ${service ? `<p><strong>Service:</strong> ${service}</p>` : ""}
      ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
    </div>
  `;

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer re_FYeQrtg8_5FwM9mFFHGRMMQvpjtbvmBVa`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "noreply@add-edit.fr",
        to: "a.roussel@add-edit.fr",
        subject: title,
        html,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      return res.status(response.status).json({ error });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    return res.status(500).json({ error: "Échec de l'envoi de l'email" });
  }
}
