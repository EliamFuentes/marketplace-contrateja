class HealthController {
    async check(req, res) {
        return res.status(200).json({
            status: "API Online",
            timestamp: new Date(),
        });
    }
}

export default new HealthController();