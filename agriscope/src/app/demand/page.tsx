"use client";

import { useState } from "react";

interface FormData {
  buyerName: string;
  crop: string;
  quantity: string;
  expectedPrice: string;
  location: string;
  contact: string;
  notes: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function DemandPage() {
  const [formData, setFormData] = useState<FormData>({
    buyerName: "",
    crop: "",
    quantity: "",
    expectedPrice: "",
    location: "",
    contact: "",
    notes: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">(
    "idle"
  );

  const crops = [
    "Wheat",
    "Rice",
    "Rice (Basmati)",
    "Tomato",
    "Onion",
    "Potato",
    "Soybean",
    "Cotton",
    "Maize",
    "Sugarcane",
    "Chilli",
    "Groundnut",
    "Other",
  ];

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.buyerName.trim()) {
      newErrors.buyerName = "Buyer name is required";
    }

    if (!formData.crop) {
      newErrors.crop = "Please select a crop";
    }

    if (!formData.quantity || parseFloat(formData.quantity) <= 0) {
      newErrors.quantity = "Please enter a valid quantity";
    }

    if (!formData.expectedPrice || parseFloat(formData.expectedPrice) <= 0) {
      newErrors.expectedPrice = "Please enter a valid price";
    }

    if (!formData.location.trim()) {
      newErrors.location = "Location is required";
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required";
    } else if (!/^[0-9]{10}$/.test(formData.contact.trim())) {
      newErrors.contact = "Please enter a valid 10-digit number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // In production, post to:
      // const res = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/demand`, {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData)
      // });

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate success (90% success rate for demo)
      if (Math.random() > 0.1) {
        setSubmitStatus("success");
        setFormData({
          buyerName: "",
          crop: "",
          quantity: "",
          expectedPrice: "",
          location: "",
          contact: "",
          notes: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitStatus("idle");
    setFormData({
      buyerName: "",
      crop: "",
      quantity: "",
      expectedPrice: "",
      location: "",
      contact: "",
      notes: "",
    });
    setErrors({});
  };

  // Success State
  if (submitStatus === "success") {
    return (
      <main className="min-h-screen py-10 md:py-14 px-4 sm:px-6 bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 text-center">
          <div className="text-5xl mb-4">✅</div>
          <h2 className="text-xl font-bold text-green-700 mb-2">
            Demand Submitted Successfully!
          </h2>
          <p className="text-sm text-gray-600 mb-6 leading-relaxed">
            Your crop demand has been recorded. Farmers will be able to see your
            requirement and may contact you directly.
          </p>
          <div className="space-y-2">
            <button
              onClick={resetForm}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 active:bg-green-800 transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit Another Demand
            </button>
            <a
              href="/dashboard"
              className="block w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 active:bg-gray-300 transition-colors"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen py-10 md:py-14 px-4 sm:px-6 bg-gray-50">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <header className="mb-6 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
            📝 Submit Buyer Demand
          </h1>
          <p className="text-sm text-gray-500">
            Post your crop requirements and connect with farmers directly
          </p>
        </header>

        {/* Error Alert */}
        {submitStatus === "error" && (
          <div className="mb-5 bg-red-50 border border-red-100 rounded-lg p-4 text-red-700">
            <p className="font-medium text-sm">❌ Submission failed</p>
            <p className="text-xs mt-1 text-red-600">
              Please try again. If the problem persists, contact support.
            </p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 md:p-6"
        >
          {/* Section: Your Info */}
          <fieldset className="mb-6">
            <legend className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Your Information
            </legend>

            {/* Buyer Name */}
            <div className="mb-5">
              <label
                htmlFor="buyerName"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Buyer Name / Business Name
                <span className="text-red-400 ml-0.5">*</span>
              </label>
              <input
                type="text"
                id="buyerName"
                name="buyerName"
                value={formData.buyerName}
                onChange={handleChange}
                placeholder="e.g., Sharma Traders"
                className={`w-full px-3.5 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.buyerName ? "border-red-400 bg-red-50/50" : "border-gray-200 bg-white"
                }`}
              />
              {errors.buyerName && (
                <p className="text-red-500 text-xs mt-1.5">{errors.buyerName}</p>
              )}
            </div>

            {/* Contact */}
            <div>
              <label
                htmlFor="contact"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Contact Number
                <span className="text-red-400 ml-0.5">*</span>
              </label>
              <input
                type="tel"
                id="contact"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                maxLength={10}
                className={`w-full px-3.5 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.contact ? "border-red-400 bg-red-50/50" : "border-gray-200 bg-white"
                }`}
              />
              {errors.contact && (
                <p className="text-red-500 text-xs mt-1.5">{errors.contact}</p>
              )}
            </div>
          </fieldset>

          {/* Divider */}
          <hr className="border-gray-100 mb-6" />

          {/* Section: Crop Details */}
          <fieldset className="mb-6">
            <legend className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-4">
              Crop Details
            </legend>

            {/* Crop Selection */}
            <div className="mb-5">
              <label
                htmlFor="crop"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Crop Required
                <span className="text-red-400 ml-0.5">*</span>
              </label>
              <select
                id="crop"
                name="crop"
                value={formData.crop}
                onChange={handleChange}
                className={`w-full px-3.5 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent appearance-none bg-no-repeat bg-right ${
                  errors.crop ? "border-red-400 bg-red-50/50" : "border-gray-200 bg-white"
                }`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3E%3C/svg%3E")`,
                  backgroundPosition: "right 0.75rem center",
                  backgroundSize: "1.25em 1.25em",
                }}
              >
                <option value="">Select a crop</option>
                {crops.map((crop) => (
                  <option key={crop} value={crop}>
                    {crop}
                  </option>
                ))}
              </select>
              {errors.crop && (
                <p className="text-red-500 text-xs mt-1.5">{errors.crop}</p>
              )}
            </div>

            {/* Quantity and Price Row */}
            <div className="grid grid-cols-2 gap-4 mb-5">
              {/* Quantity */}
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Quantity (Q)
                  <span className="text-red-400 ml-0.5">*</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={formData.quantity}
                  onChange={handleChange}
                  placeholder="e.g., 50"
                  min="1"
                  className={`w-full px-3.5 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.quantity ? "border-red-400 bg-red-50/50" : "border-gray-200 bg-white"
                  }`}
                />
                {errors.quantity && (
                  <p className="text-red-500 text-xs mt-1.5">{errors.quantity}</p>
                )}
              </div>

              {/* Expected Price */}
              <div>
                <label
                  htmlFor="expectedPrice"
                  className="block text-sm font-medium text-gray-700 mb-1.5"
                >
                  Price (₹/Q)
                  <span className="text-red-400 ml-0.5">*</span>
                </label>
                <input
                  type="number"
                  id="expectedPrice"
                  name="expectedPrice"
                  value={formData.expectedPrice}
                  onChange={handleChange}
                  placeholder="e.g., 2200"
                  min="1"
                  className={`w-full px-3.5 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                    errors.expectedPrice ? "border-red-400 bg-red-50/50" : "border-gray-200 bg-white"
                  }`}
                />
                {errors.expectedPrice && (
                  <p className="text-red-500 text-xs mt-1.5">
                    {errors.expectedPrice}
                  </p>
                )}
              </div>
            </div>

            {/* Location */}
            <div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Pickup Location
                <span className="text-red-400 ml-0.5">*</span>
              </label>
              <input
                type="text"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="e.g., Azadpur Mandi, Delhi"
                className={`w-full px-3.5 py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent ${
                  errors.location ? "border-red-400 bg-red-50/50" : "border-gray-200 bg-white"
                }`}
              />
              {errors.location && (
                <p className="text-red-500 text-xs mt-1.5">{errors.location}</p>
              )}
            </div>
          </fieldset>

          {/* Divider */}
          <hr className="border-gray-100 mb-6" />

          {/* Notes */}
          <div className="mb-6">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-1.5"
            >
              Additional Notes
              <span className="text-gray-400 text-xs font-normal ml-1">(optional)</span>
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Quality requirements, delivery timeline, etc."
              rows={3}
              className="w-full px-3.5 py-3 text-sm border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3.5 rounded-lg text-base font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              isSubmitting
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 active:bg-green-800 text-white focus:ring-green-500"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-2 h-4 w-4 text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Demand →"
            )}
          </button>
        </form>

        {/* Info Box */}
        <aside className="mt-5 bg-gray-50 border border-gray-100 rounded-lg p-4">
          <details className="group">
            <summary className="flex items-center justify-between cursor-pointer list-none text-sm font-medium text-gray-600">
              <span>ℹ️ How it works</span>
              <span className="text-gray-400 group-open:rotate-180 transition-transform text-xs">▼</span>
            </summary>
            <ul className="mt-3 text-gray-500 text-xs space-y-2 leading-relaxed">
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                Your demand will be visible to farmers on the platform
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                Farmers matching your crop can see your requirements
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                Interested farmers may contact you directly
              </li>
              <li className="flex gap-2">
                <span className="text-gray-400">•</span>
                All transactions happen directly between you and the farmer
              </li>
            </ul>
          </details>
        </aside>
      </div>
    </main>
  );
}
