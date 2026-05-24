interface EmailData {
  name: string;
  company?: string;
  email: string;
  service?: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<{ success: boolean; error?: string }> => {
  try {
    const API_URL = import.meta.env.VITE_API_URL || 'https://kaizenspark-cooperate-1.onrender.com';
    
    const response = await fetch(`${API_URL}/api/contact`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Backend API Error:', error);
      return { success: false, error: error.detail || 'Failed to send email' };
    }

    const result = await response.json();
    console.log('Email sent successfully via backend:', result);
    return { success: true };
  } catch (error) {
    console.error('Error sending email:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to send email' 
    };
  }
};
