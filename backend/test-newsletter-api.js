const axios = require('axios');

const testNewsletterAPI = async () => {
  try {
    const API_URL = process.env.API_URL || 'http://localhost:5000/api';
    
    console.log('Testing Newsletter API...');
    console.log('API URL:', `${API_URL}/newsletter`);
    
    const response = await axios.get(`${API_URL}/newsletter`);
    
    console.log('\n✅ API Response:');
    console.log('Status:', response.status);
    console.log('Data:', JSON.stringify(response.data, null, 2));
    
    console.log('\n📊 Stats:');
    console.log('Total Count:', response.data.count);
    console.log('Active Count:', response.data.activeCount);
    console.log('Subscribers:', response.data.subscribers?.length || 0);
    
  } catch (error) {
    console.error('❌ Error:', error.message);
    if (error.response) {
      console.error('Response Status:', error.response.status);
      console.error('Response Data:', error.response.data);
    }
  }
};

testNewsletterAPI();
