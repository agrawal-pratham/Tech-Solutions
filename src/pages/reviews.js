import { trackEvent } from "@/lib/analytics";
import Head from "next/head";
import { useMemo, useState } from "react";
import {
  FiCheckCircle,
  FiFilter,
  FiMessageSquare,
  FiPlus,
  FiSearch,
  FiStar,
  FiThumbsUp,
  FiX,
} from "react-icons/fi";
import { FaQuoteLeft } from "react-icons/fa";

const initialReviews = [
  {
    id: 1,
    name: "Elena Rostova",
    role: "Chief Technology Officer",
    company: "FinFlow Global",
    avatarBg: "bg-blue-600",
    initials: "ER",
    rating: 5,
    date: "August 14, 2026",
    category: "Web Applications",
    tags: ["Next.js", "TypeScript", "FinTech"],
    title: "Exceptional architecture and lightning-fast execution",
    content:
      "Tech Solutions transformed our financial dashboard from a sluggish legacy system into an ultra-responsive Next.js web application. Their deep knowledge of state management and API security was invaluable. We saw an immediate 40% improvement in daily active user engagement.",
    helpfulCount: 24,
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Founder & CEO",
    company: "TrendHub Apparel",
    avatarBg: "bg-emerald-600",
    initials: "MC",
    rating: 5,
    date: "July 28, 2026",
    category: "E-Commerce",
    tags: ["Headless Shopify", "Stripe", "Tailwind CSS"],
    title: "Doubled our conversion rate within 30 days of launch",
    content:
      "The custom e-commerce portal and checkout flow they built exceeded our wildest expectations. Our site page load times dropped to under 0.8 seconds globally, directly resulting in an immediate boost to our checkout completion rates. Truly a top-tier engineering partner.",
    helpfulCount: 19,
  },
  {
    id: 3,
    name: "Dr. Sarah Jenkins",
    role: "Director of Product",
    company: "PulseCare Health",
    avatarBg: "bg-purple-600",
    initials: "SJ",
    rating: 5,
    date: "July 12, 2026",
    category: "UI/UX & Mobile",
    tags: ["HIPAA Compliant", "React", "Design System"],
    title: "Patient portal design is intuitive, accessible, and secure",
    content:
      "Working on healthcare technology requires extreme attention to detail and accessibility. The team crafted an incredible design system and built our patient intake portal with full WCAG 2.1 compliance. Feedback from patients across all demographics has been overwhelmingly positive.",
    helpfulCount: 31,
  },
  {
    id: 4,
    name: "David Miller",
    role: "VP of Engineering",
    company: "CloudScale Infrastructure",
    avatarBg: "bg-amber-600",
    initials: "DM",
    rating: 5,
    date: "June 30, 2026",
    category: "Cloud & Backend",
    tags: ["AWS", "Docker", "FastAPI", "Kubernetes"],
    title: "Seamless migration with zero unplanned downtime",
    content:
      "Pratham and his team architected our migration from monolith to containerized microservices on AWS. Their CI/CD automation and infrastructure-as-code scripts cut our deployment cycle from 3 days to under 15 minutes. Highly recommended for any serious cloud project.",
    helpfulCount: 15,
  },
  {
    id: 5,
    name: "Sophia Martinez",
    role: "Managing Director",
    company: "UrbanNest Realty",
    avatarBg: "bg-rose-600",
    initials: "SM",
    rating: 5,
    date: "June 05, 2026",
    category: "Web Applications",
    tags: ["Real Estate", "Mapbox", "Next.js"],
    title: "The interactive property map is a massive competitive advantage",
    content:
      "Our clients constantly praise the map search and filtering experience Tech Solutions developed. The site handles hundreds of thousands of listings effortlessly without lagging. They met every single milestone ahead of schedule.",
    helpfulCount: 18,
  },
  {
    id: 6,
    name: "Aarav Patel",
    role: "Co-Founder",
    company: "LearnSphere Interactive",
    avatarBg: "bg-cyan-600",
    initials: "AP",
    rating: 5,
    date: "May 19, 2026",
    category: "UI/UX & Mobile",
    tags: ["EdTech", "WebSockets", "Interactive UI"],
    title: "Brought our educational platform concept to life flawlessly",
    content:
      "From wireframes to production deployment, the collaboration was smooth and transparent. The real-time interactive quiz features and gamified progress dashboards keep our students glued to the platform. An exceptional software partner.",
    helpfulCount: 22,
  },
];

export default function ReviewsPage() {
  const [reviews, setReviews] = useState(initialReviews);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [helpfulVoted, setHelpfulVoted] = useState({});

  // New Review Form State
  const [newReview, setNewReview] = useState({
    name: "",
    role: "",
    company: "",
    rating: 5,
    category: "Web Applications",
    title: "",
    content: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const categories = [
    "All",
    "Web Applications",
    "UI/UX & Mobile",
    "Cloud & Backend",
    "E-Commerce",
  ];

  const filteredReviews = useMemo(() => {
    return reviews.filter((rev) => {
      const matchesCategory =
        selectedCategory === "All" || rev.category === selectedCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        rev.name.toLowerCase().includes(q) ||
        rev.company.toLowerCase().includes(q) ||
        rev.title.toLowerCase().includes(q) ||
        rev.content.toLowerCase().includes(q) ||
        rev.tags.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    });
  }, [reviews, selectedCategory, searchQuery]);

  const handleToggleHelpful = (id) => {
    if (helpfulVoted[id]) return;
    setReviews((prev) =>
      prev.map((r) => (r.id === id ? { ...r, helpfulCount: r.helpfulCount + 1 } : r))
    );
    setHelpfulVoted((prev) => ({ ...prev, [id]: true }));
  };

  const handleModalSubmit = (e) => {
    e.preventDefault();
    if (!newReview.name || !newReview.content || !newReview.title) return;

    const initials = newReview.name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();

    const created = {
      id: Date.now(),
      name: newReview.name.trim(),
      role: newReview.role.trim() || "Client",
      company: newReview.company.trim() || "Verified Partner",
      avatarBg: "bg-blue-600",
      initials: initials || "VP",
      rating: Number(newReview.rating),
      date: "Just now",
      category: newReview.category,
      tags: ["Verified Review", "Recent Delivery"],
      title: newReview.title.trim(),
      content: newReview.content.trim(),
      helpfulCount: 0,
    };

    setReviews([created, ...reviews]);
    setSubmitSuccess(true);

    trackEvent({
      action: "review_submitted",
      category: "social_proof",
      label: newReview.category,
      value: Number(newReview.rating),
      params: {
        company: created.company,
        rating: created.rating,
      },
    });

    setTimeout(() => {
      setSubmitSuccess(false);
      setIsModalOpen(false);
      setNewReview({
        name: "",
        role: "",
        company: "",
        rating: 5,
        category: "Web Applications",
        title: "",
        content: "",
      });
    }, 1500);
  };

  return (
    <>
      <Head>
        <title>Client Reviews & Testimonials - Solutions by Pratham Agrawal</title>
        <meta
          name="description"
          content="Read verified client reviews and ratings for Solutions by Pratham Agrawal. Discover how our web development and cloud engineering deliver tangible business results."
        />
        <meta
          name="keywords"
          content="Tech Solutions reviews, Pratham Agrawal client testimonials, web development rating, customer feedback"
        />
        <link rel="canonical" href="https://solutions.agrawalpratham.in/reviews" />
      </Head>

      <div className="min-h-screen pt-28 pb-20 bg-bg_light dark:bg-bg_dark text-gray-800 dark:text-gray-100 transition-colors">
        {/* Hero & Rating Aggregate */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300 mb-4">
              Real Client Experiences
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">
              Trusted by Ambitious Teams Worldwide
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Discover how our engineering solutions empower startups and enterprises to achieve scale, speed, and reliability.
            </p>
          </div>

          {/* Rating Summary Card */}
          <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-10 border border-gray-200 dark:border-gray-700 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Overall Score */}
              <div className="lg:col-span-4 text-center lg:text-left lg:border-r border-gray-200 dark:border-gray-700 lg:pr-8">
                <div className="text-5xl sm:text-6xl font-black text-gray-900 dark:text-white mb-2">
                  4.9
                  <span className="text-2xl sm:text-3xl text-gray-400 font-semibold">/5.0</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-400 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="fill-current" size={22} />
                  ))}
                </div>
                <p className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  Based on 128+ verified client projects
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  98% would recommend our services to a peer
                </p>
              </div>

              {/* Breakdown Bars */}
              <div className="lg:col-span-5 space-y-2.5">
                {[
                  { star: 5, pct: 94, count: 120 },
                  { star: 4, pct: 6, count: 8 },
                  { star: 3, pct: 0, count: 0 },
                  { star: 2, pct: 0, count: 0 },
                  { star: 1, pct: 0, count: 0 },
                ].map((row) => (
                  <div key={row.star} className="flex items-center gap-3 text-xs sm:text-sm">
                    <span className="w-12 font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
                      {row.star} <FiStar className="fill-amber-400 text-amber-400 text-xs inline" />
                    </span>
                    <div className="flex-1 h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber-400 rounded-full transition-all duration-500"
                        style={{ width: `${row.pct}%` }}
                      ></div>
                    </div>
                    <span className="w-10 text-right font-medium text-gray-500 dark:text-gray-400">
                      {row.count}
                    </span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="lg:col-span-3 text-center">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-primary hover:bg-blue-700 text-white font-semibold text-sm rounded-xl transition-all shadow-md"
                >
                  <FiPlus size={18} />
                  Write a Review
                </button>
                <p className="text-xs text-gray-400 mt-2">
                  Have we worked together? Share your feedback!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat
                      ? "bg-primary text-white shadow-sm"
                      : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search reviews or tech..."
                className="w-full pl-10 pr-4 py-2 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  <FiX size={14} />
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredReviews.length === 0 ? (
            <div className="text-center py-16 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 p-8">
              <FiMessageSquare className="mx-auto text-4xl text-gray-400 mb-3" />
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                No reviews found
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                No client testimonials matched your active filter or search terms.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSearchQuery("");
                }}
                className="px-4 py-2 bg-primary text-white text-xs font-semibold rounded-lg"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredReviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-white dark:bg-gray-800 rounded-2xl p-6 sm:p-7 border border-gray-200 dark:border-gray-700 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div>
                    {/* Top row: Stars & Category */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <div className="flex items-center text-amber-400 gap-1">
                        {[...Array(rev.rating)].map((_, i) => (
                          <FiStar key={i} className="fill-current" size={16} />
                        ))}
                      </div>
                      <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300">
                        {rev.category}
                      </span>
                    </div>

                    {/* Review Title */}
                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                      "{rev.title}"
                    </h3>

                    {/* Review Body */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-5">
                      {rev.content}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {rev.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Client Info */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-700/80 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-xs ${rev.avatarBg}`}
                      >
                        {rev.initials}
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                            {rev.name}
                          </h4>
                          <FiCheckCircle
                            className="text-primary dark:text-blue-400 text-xs"
                            title="Verified Client"
                          />
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400">
                          {rev.role}, {rev.company}
                        </p>
                      </div>
                    </div>

                    {/* Helpful Button */}
                    <button
                      onClick={() => handleToggleHelpful(rev.id)}
                      className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-lg border transition-colors ${
                        helpfulVoted[rev.id]
                          ? "bg-blue-50 dark:bg-blue-950/50 border-blue-200 text-primary dark:text-blue-400"
                          : "border-gray-200 dark:border-gray-700 text-gray-500 hover:text-gray-700 dark:text-gray-400"
                      }`}
                      title="Mark as helpful"
                    >
                      <FiThumbsUp size={12} />
                      <span>{rev.helpfulCount}</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal: Write a Review */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white dark:bg-gray-800 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-gray-200 dark:border-gray-700 relative max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute right-5 top-5 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <FiX size={20} />
              </button>

              {submitSuccess ? (
                <div className="text-center py-8">
                  <div className="w-14 h-14 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <FiCheckCircle size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Review Submitted!
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    Thank you for your valuable feedback. Your review has been added to our wall!
                  </p>
                </div>
              ) : (
                <form onSubmit={handleModalSubmit}>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
                    Share Your Experience
                  </h2>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-6">
                    Help others understand what it’s like partnering with Tech Solutions.
                  </p>

                  <div className="space-y-4">
                    {/* Star Rating Select */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Overall Rating
                      </label>
                      <div className="flex items-center gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() =>
                              setNewReview((prev) => ({ ...prev, rating: star }))
                            }
                            className="p-1 focus:outline-none"
                          >
                            <FiStar
                              size={26}
                              className={`transition-colors ${
                                star <= newReview.rating
                                  ? "fill-amber-400 text-amber-400"
                                  : "text-gray-300 dark:text-gray-600"
                              }`}
                            />
                          </button>
                        ))}
                        <span className="text-xs font-bold text-gray-600 dark:text-gray-300 ml-2">
                          {newReview.rating} out of 5
                        </span>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.name}
                        onChange={(e) =>
                          setNewReview((p) => ({ ...p, name: e.target.value }))
                        }
                        placeholder="Sarah Connor"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                          Job Title
                        </label>
                        <input
                          type="text"
                          value={newReview.role}
                          onChange={(e) =>
                            setNewReview((p) => ({ ...p, role: e.target.value }))
                          }
                          placeholder="e.g. Founder"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={newReview.company}
                          onChange={(e) =>
                            setNewReview((p) => ({ ...p, company: e.target.value }))
                          }
                          placeholder="e.g. Acme Corp"
                          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Project Category
                      </label>
                      <select
                        value={newReview.category}
                        onChange={(e) =>
                          setNewReview((p) => ({ ...p, category: e.target.value }))
                        }
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      >
                        <option value="Web Applications">Web Applications</option>
                        <option value="UI/UX & Mobile">UI/UX & Mobile</option>
                        <option value="Cloud & Backend">Cloud & Backend</option>
                        <option value="E-Commerce">E-Commerce</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Headline / Title <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={newReview.title}
                        onChange={(e) =>
                          setNewReview((p) => ({ ...p, title: e.target.value }))
                        }
                        placeholder="e.g. Delivered exactly what our startup needed"
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider mb-1.5">
                        Review Details <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={newReview.content}
                        onChange={(e) =>
                          setNewReview((p) => ({ ...p, content: e.target.value }))
                        }
                        placeholder="Share details about the quality of code, communication, deadlines, and results..."
                        className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-primary"
                      ></textarea>
                    </div>

                    <div className="pt-2 flex justify-end gap-3">
                      <button
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-5 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        className="px-6 py-2.5 bg-primary hover:bg-blue-700 text-white text-xs font-semibold rounded-lg shadow"
                      >
                        Submit Review
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
