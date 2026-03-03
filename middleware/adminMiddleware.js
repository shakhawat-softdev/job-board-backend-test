
// This middleware was originally used for simple header-based admin access.
// It's now deprecated in favor of JWT/role-based authentication.  
// The file is kept for backwards compatibility where existing examples
// might reference it, but new code should use `authMiddleware.protect`
// and `authMiddleware.authorizeRoles("admin")` instead.

module.exports = (req, res, next) => {
  const adminSecret = req.headers["x-admin-secret"];

  if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
    return res.status(403).json({ message: "Admin access required" });
  }

  next();
};
