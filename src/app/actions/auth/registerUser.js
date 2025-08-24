import dbConnection from '@/app/lib/mongodb';

const registerUser = async (payload) => {
  try {
    const collection = await dbConnection('test-user');
    const result = await collection.insertOne(payload);
    return { success: true, data: result };
  } catch (error) {
    console.error('Error registering user:', error);
    return { success: false, error: error.message };
  }
};

export default registerUser;
