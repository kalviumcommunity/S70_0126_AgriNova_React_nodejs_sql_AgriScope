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
      <div className="min-h-screen py-12 px-4 bg-gray-50">
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8 text-center">
          <div className="text-6xl mb-4">✅</div>
          <h2 className="text-2xl font-bold text-green-700 mb-2">
            Demand Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-6">
            Your crop demand has been recorded. Farmers will be able to see your
            requirement and may contact you directly.
          </p>
          <div className="space-y-3">
            <button
              onClick={resetForm}
              className="w-full bg-green-600 text-white py-3 rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Submit Another Demand
            </button>
            <a
              href="/dashboard"
              className="block w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Go to Dashboard
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 bg-gray-50">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            📝 Submit Buyer Demand
          </h1>
          <p className="text-gray-700">
            Post your crop requirements and connect with farmers directly
          </p>
        </div>

        {/* Error Alert */}
        {submitStatus === "error" && (
          <div className="mb-6 bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            <p className="font-medium">❌ Submission failed</p>
            <p className="text-sm mt-1">
              Please try again. If the problem persists, contact support.
            </p>
          </div>
        )}

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-md p-6 md:p-8"
        >
          {/* Buyer Name */}
          <div className="mb-6">
            <label
              htmlFor="buyerName"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Buyer Name / Business Name *
            </label>
            <input
              type="text"
              id="buyerName"
              name="buyerName"
              value={formData.buyerName}
              onChange={handleChange}
              placeholder="Enter your name or business name"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.buyerName ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.buyerName && (
              <p className="text-red-500 text-sm mt-1">{errors.buyerName}</p>
            )}
          </div>

          {/* Crop Selection */}
          <div className="mb-6">
            <label
              htmlFor="crop"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Crop Required *
            </label>
            <select
              id="crop"
              name="crop"
              value={formData.crop}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.crop ? "border-red-500" : "border-gray-300"
              }`}
            >
              <option value="">Select a crop</option>
              {crops.map((crop) => (
                <option key={crop} value={crop}>
                  {crop}
                </option>
              ))}
            </select>
            {errors.crop && (
              <p className="text-red-500 text-sm mt-1">{errors.crop}</p>
            )}
          </div>

          {/* Quantity and Price Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* Quantity */}
            <div>
              <label
                htmlFor="quantity"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Quantity (Quintals) *
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="e.g., 50"
                min="1"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.quantity ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.quantity && (
                <p className="text-red-500 text-sm mt-1">{errors.quantity}</p>
              )}
            </div>

            {/* Expected Price */}
            <div>
              <label
                htmlFor="expectedPrice"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Expected Price (₹/Quintal) *
              </label>
              <input
                type="number"
                id="expectedPrice"
                name="expectedPrice"
                value={formData.expectedPrice}
                onChange={handleChange}
                placeholder="e.g., 2200"
                min="1"
                className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                  errors.expectedPrice ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.expectedPrice && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.expectedPrice}
                </p>
              )}
            </div>
          </div>

          {/* Location */}
          <div className="mb-6">
            <label
              htmlFor="location"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Pickup Location / City *
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="e.g., Azadpur Mandi, Delhi"
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.location ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.location && (
              <p className="text-red-500 text-sm mt-1">{errors.location}</p>
            )}
          </div>

          {/* Contact */}
          <div className="mb-6">
            <label
              htmlFor="contact"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Contact Number *
            </label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              maxLength={10}
              className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 ${
                errors.contact ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
            )}
          </div>

          {/* Notes */}
          <div className="mb-8">
            <label
              htmlFor="notes"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Additional Notes (Optional)
            </label>
            <textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Any specific quality requirements, delivery timeline, etc."
              rows={3}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-4 rounded-lg text-lg font-semibold transition-colors ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <svg
                  className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
              "Submit Demand"
            )}
          </button>
        </form>

        {/* Info Box */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <h3 className="font-medium text-blue-800 mb-2">
            ℹ️ How it works
          </h3>
          <ul className="text-blue-700 text-sm space-y-1">
            <li>• Your demand will be visible to farmers on the platform</li>
            <li>• Farmers matching your crop can see your requirements</li>
            <li>• Interested farmers may contact you directly</li>
            <li>• All transactions happen directly between you and the farmer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
