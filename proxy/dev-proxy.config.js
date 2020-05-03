const PROXY_CONFIG = [
  {
    context: [
      "/api",
      "/images"
    ],
    target: "http://localhost:8070",
    secure: false
  }
]

module.exports = PROXY_CONFIG;
