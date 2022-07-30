const generateError = (message: string, code: number): never => {
  throw { message, errorCode: code };
};

const res = generateError('An error occurred!', 500);
