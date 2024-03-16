const config = {
    api: {
        base: process.env.NEXT_PUBLIC_BASE_API_URL || "https://swiftcare-server.onrender.com/api/v1/",
        local: process.env.NEXT_PUBLIC_LOCAL_API_URL || "http://localhost:8888/api/v1",
    },
};

export default config;