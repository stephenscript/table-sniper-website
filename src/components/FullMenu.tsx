'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { type RestaurantData } from './RestaurantData';

interface FullMenuProps {
    restaurantData: RestaurantData;
}

export const FullMenu: React.FC<FullMenuProps> = ({ restaurantData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 12;

    // Group menu items by category
    const groupedItems = restaurantData.menuCategories
        .filter((cat) => cat !== 'All')
        .map((category) => ({
            category,
            items: restaurantData.menuItems.filter((item) => item.category === category),
        }))
        .filter((group) => group.items.length > 0);

    // Calculate total pages needed
    const totalItems = restaurantData.menuItems.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Get items for current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Flatten all items and slice for current page
    const allItems = groupedItems.flatMap((group) =>
        group.items.map((item) => ({ ...item, categoryName: group.category }))
    );
    const currentPageItems = allItems.slice(startIndex, endIndex);

    // Group current page items by category for display
    const currentPageGrouped = currentPageItems.reduce(
        (acc, item) => {
            const category = item.categoryName;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(item);
            return acc;
        },
        {} as Record<string, typeof currentPageItems>
    );

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    return (
        <div className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black p-4">
            <div className="relative flex h-full w-full max-w-6xl flex-col overflow-hidden bg-white shadow-2xl">
                {/* Header */}
                <div className="bg-gradient-to-r from-red-600 to-red-700 p-6 text-white shadow-lg">
                    <div className="text-center">
                        <h1 className="mb-2 font-serif text-4xl font-bold">
                            {restaurantData.name}
                        </h1>
                        <p className="text-xl opacity-90">{restaurantData.tagline}</p>
                        <div className="mt-4 flex justify-center gap-6 text-sm">
                            <span>☎ {restaurantData.contact.phone}</span>
                            <span>✉ {restaurantData.contact.email}</span>
                        </div>
                    </div>
                </div>

                {/* Menu Content - Scrollable */}
                <div className="flex-1 overflow-y-auto bg-amber-50 p-8">
                    <div className="mx-auto max-w-5xl border-2 border-amber-200 bg-white p-8 shadow-lg">
                        {Object.entries(currentPageGrouped).map(([category, items]) => (
                            <div key={category} className="mb-8 last:mb-0">
                                <h2 className="mb-6 border-b-4 border-red-700 pb-2 font-serif text-3xl font-bold text-red-700">
                                    {category}
                                </h2>
                                <div className="space-y-4">
                                    {items.map((item) => (
                                        <div
                                            key={item.id}
                                            className="flex items-start justify-between gap-4 border-b border-dotted border-gray-300 pb-4 last:border-0"
                                        >
                                            <div className="flex-1">
                                                <h3 className="mb-1 text-xl font-semibold text-gray-900">
                                                    {item.name}
                                                </h3>
                                                <p className="text-sm leading-relaxed text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                            <div className="flex-shrink-0 text-right">
                                                <span className="text-xl font-bold text-red-600">
                                                    {item.price}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Footer with Pagination */}
                <div className="flex items-center justify-between border-t border-gray-300 bg-gray-100 p-4">
                    <button
                        onClick={handlePrevPage}
                        disabled={currentPage === 1}
                        className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-semibold transition ${
                            currentPage === 1
                                ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                                : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                    >
                        <ChevronLeft className="h-5 w-5" />
                        Previous
                    </button>

                    <div className="flex items-center gap-2">
                        <span className="font-medium text-gray-700">
                            Page {currentPage} of {totalPages}
                        </span>
                    </div>

                    <button
                        onClick={handleNextPage}
                        disabled={currentPage === totalPages}
                        className={`flex cursor-pointer items-center gap-2 rounded-lg px-4 py-2 font-semibold transition ${
                            currentPage === totalPages
                                ? 'cursor-not-allowed bg-gray-300 text-gray-500'
                                : 'bg-red-600 text-white hover:bg-red-700'
                        }`}
                    >
                        Next
                        <ChevronRight className="h-5 w-5" />
                    </button>
                </div>
            </div>
        </div>
    );
};
