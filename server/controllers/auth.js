import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import getSelectiveUser from "../utils/getSelectiveUser.js";

async function login(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Email is incorrect" });
    }
    if (!(await user.isPasswordValid(password))) {
      return res.status(401).json({ message: "Incorrect Password" });
    }
    const token = generateToken(user);
    res.cookie("jwt_token", token);
    return res.status(200).json({
      message: "Successfully logged in",
      data: {
        token,
        user: getSelectiveUser(user),
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

async function register(req, res) {
  const { name, email, password } = req.body;
  try {
    const alreadyUser = await User.findOne({ email });
    if (alreadyUser) {
      return res.status(401).json({ message: "User already exists" });
    }
    const user = await User.create({ email, password, name });
    const token = generateToken(user);
    res.cookie("jwt_token", token);
    return res.status(200).json({
      message: "Successfully registered & logged in",
      data: { token, user: getSelectiveUser(user) },
    });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

async function adminLogin(req, res) {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Credentials are incorrect" });
    }
    if (!user.isOrganization) {
      return res.status(401).json({ message: "Credentials are incorrect" });
    }
    const isPasswordValid = await user.isPasswordValid(password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Credentials are incorrect" });
    }
    const token = generateToken(user);
    return res
      .status(200)
      .json({ message: "Successfully logged in", data: { token, user: getSelectiveUser(user) } });
  } catch (error) {
    return res.status(500).json({ message: "Internal Server Error" });
  }
}

export { login, register, adminLogin };
