import { Mail, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function GetStarted() {
  return (
    <main className="bg-white text-black flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex-1 flex items-center overflow-hidden min-h-[100vh]">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-transparent" />

        {/* Floating Orbs */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-blue-500/10 blur-3xl"
        />
        <motion.div
          animate={{ y: [0, 25, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-0 -right-20 w-96 h-96 rounded-full bg-blue-400/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative max-w-7xl mx-auto px-6 py-24 text-center"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 text-sm font-medium rounded-full bg-blue-100 text-blue-700"
          >
            <Sparkles className="w-4 h-4" />
            Let’s Work Together
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
          >
            Let’s Build Something{" "}
            <span className="text-blue-600">Great Together</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-2xl mx-auto text-lg text-gray-600 mb-12"
          >
            Tell us about your idea, project, or business goal — and let’s
            explore how we can help you bring it to life.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="https://wa.me/2348150458351"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 text-white font-medium hover:bg-blue-700 transition shadow-lg shadow-blue-600/25"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              href="mailto:khurizahinnovation@gmail.com"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl border border-gray-300 font-medium hover:border-blue-600 hover:text-blue-600 transition"
            >
              <Mail className="w-5 h-5" />
              Send an Email
            </motion.a>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="mt-6 text-sm text-gray-500"
          >
            🟢 Typically replies within a few minutes
          </motion.p>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
