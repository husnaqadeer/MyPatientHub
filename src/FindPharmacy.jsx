import { useState } from "react";
import "./FindPharmacy.css";

import medicalProduct from "./assets/medical product.jpg";
import secondMedicine from "./assets/second medicine.jpg";
import thirdMedicine from "./assets/thrid medicine.jpg";
import fourthMedicine from "./assets/forth medicine.jpg";

import pic1 from "./assets/pic 1.jpg";
import pic2 from "./assets/pic 2.jpg";
import pic3 from "./assets/pic 3.jpg";
import pic4 from "./assets/pic 4.jpg";
import pic5 from "./assets/pic 5.jpg";
import pic6 from "./assets/pic 6.jpg";


export default function FindPharmacy() {

    // Search and entries settings

    const [search, setSearch] = useState("");
    const [entries, setEntries] = useState(6);


    // Top medicine cards

    const products = [
        {
            id: 1,
            name: "Esomeprazole",
            price: "10 RM",
            company: "Carry Medical",
            image: medicalProduct,
            logo: pic1,
            description:
                "Carry Medical provides fresh and excellent quality medicines."
        },
        {
            id: 2,
            name: "Paracetamol",
            price: "9 RM",
            company: "Pool Medical",
            image: secondMedicine,
            logo: pic2,
            description:
                "High quality medicines with reliable pharmacy service."
        },
        {
            id: 3,
            name: "Amoxicillin",
            price: "8 RM",
            company: "OK Pharmacy",
            image: thirdMedicine,
            logo: pic3,
            description:
                "Quality medicine and professional pharmacy service."
        },
        {
            id: 4,
            name: "Omeprazole",
            price: "11 RM",
            company: "Hamza Pharma",
            image: fourthMedicine,
            logo: pic4,
            description:
                "A trusted pharmacy providing quality healthcare products."
        }
    ];


    // Medicine search results

    const tableData = [
        {
            id: "8234",
            discount: "1",
            price: "5 RM",
            name: "Esomeprazole",
            category: "Tablet",
            company: "Caring Pharmacy",
            logo: pic1
        },
        {
            id: "872",
            discount: "3",
            price: "9 RM",
            name: "Paracetamol",
            category: "Tablet",
            company: "OK Pharmacy",
            logo: pic2
        },
        {
            id: "0134",
            discount: "5",
            price: "7 RM",
            name: "Amoxicillin",
            category: "Capsule",
            company: "Hilton Medical",
            logo: pic3
        },
        {
            id: "113",
            discount: "5",
            price: "9 RM",
            name: "Omeprazole",
            category: "Tablet",
            company: "Hinucion Pharma",
            logo: pic4
        },
        {
            id: "629",
            discount: "7",
            price: "20 RM",
            name: "Cetirizine",
            category: "Tablet",
            company: "Hamza Medical Pharmacy",
            logo: pic5
        },
        {
            id: "634729",
            discount: "0",
            price: "20 RM",
            name: "Vitamin C",
            category: "Tablet",
            company: "Food Panda",
            logo: pic6
        }
    ];


    // Search the table

    const filteredData = tableData.filter((item) => {

        const searchText = search.toLowerCase();

        return (
            item.name.toLowerCase().includes(searchText) ||
            item.category.toLowerCase().includes(searchText) ||
            item.company.toLowerCase().includes(searchText) ||
            item.id.toLowerCase().includes(searchText)
        );

    });


    // Show selected number of entries

    const displayedData = filteredData.slice(0, entries);


    return (
        <div className="pharmacy-page">


            {/* FIRST WHITE BOX */}

            <section className="pharmacy-card">

                <h1>
                    Search Pharmacies for Medicines
                </h1>


                <div className="products-container">

                    {products.map((product) => (

                        <div
                            className="product-card"
                            key={product.id}
                        >


                            {/* Medicine Image */}

                            <img
                                className="food-image"
                                src={product.image}
                                alt={product.name}
                            />


                            {/* Medicine Name and Price */}

                            <div className="product-name-price">

                                <span>
                                    {product.name}
                                </span>

                                <span className="product-price">
                                    {product.price}
                                </span>

                            </div>


                            {/* Pharmacy */}

                            <div className="company">

                                <img
                                    src={product.logo}
                                    alt={product.company}
                                    className="company-logo"
                                />

                                <span>
                                    {product.company}
                                </span>

                            </div>


                            {/* Description */}

                            <p className="product-description">
                                {product.description}
                            </p>


                            {/* Buy Button */}

                            <button className="buy-button">
                                BUY NOW
                            </button>

                        </div>

                    ))}

                </div>

            </section>


            {/* SECOND WHITE BOX */}

            <section className="results-section">

                <h1>
                    Medicine Search Results
                </h1>


                {/* Table Top */}

                <div className="table-top">


                    {/* Entries */}

                    <div className="entries">

                        <select
                            value={entries}
                            onChange={(event) =>
                                setEntries(Number(event.target.value))
                            }
                        >

                            <option value="5">
                                5
                            </option>

                            <option value="6">
                                6
                            </option>

                            <option value="10">
                                10
                            </option>

                            <option value="25">
                                25
                            </option>

                        </select>

                        <span>
                            entries per page
                        </span>

                    </div>


                    {/* Search */}

                    <input
                        className="table-search"
                        type="text"
                        placeholder="Search medicine or pharmacy..."
                        value={search}
                        onChange={(event) =>
                            setSearch(event.target.value)
                        }
                    />

                </div>


                {/* Table */}

                <div className="table-container">

                    <table>

                        <thead>

                            <tr>

                                <th>
                                    NAME <span>↕</span>
                                </th>

                                <th>
                                    CATEGORY
                                </th>

                                <th>
                                    SERVICE BY <span>↕</span>
                                </th>

                                <th>
                                    DISCOUNT
                                </th>

                                <th>
                                    PRICE <span>↕</span>
                                </th>

                                <th>
                                    ID <span>↕</span>
                                </th>

                            </tr>

                        </thead>


                        <tbody>

                            {displayedData.map((item, index) => (

                                <tr key={index}>


                                    {/* Name */}

                                    <td>

                                        <div className="name-cell">

                                            <img
                                                src={item.logo}
                                                alt={item.name}
                                            />

                                            <span>
                                                {item.name}
                                            </span>

                                        </div>

                                    </td>


                                    {/* Category */}

                                    <td>
                                        {item.category}
                                    </td>


                                    {/* Service By */}

                                    <td>

                                        <div className="service-cell">

                                            <img
                                                src={item.logo}
                                                alt={item.company}
                                            />

                                            <span>
                                                {item.company}
                                            </span>

                                        </div>

                                    </td>


                                    {/* Discount */}

                                    <td>
                                        {item.discount}
                                    </td>


                                    {/* Price */}

                                    <td>
                                        {item.price}
                                    </td>


                                    {/* ID */}

                                    <td>
                                        {item.id}
                                    </td>

                                </tr>

                            ))}


                            {/* No results */}

                            {displayedData.length === 0 && (

                                <tr>

                                    <td colSpan="6">
                                        No medicines or pharmacies found.
                                    </td>

                                </tr>

                            )}

                        </tbody>

                    </table>

                </div>


                {/* Table Footer */}

                <div className="table-footer">

                    Showing {displayedData.length} of {filteredData.length} entries

                </div>

            </section>


            {/* Footer */}

            <footer>

                <p>
                    © 2026, made with &hearts; by
                    <strong> MyPatientHUB</strong>
                    {" "}for a better web.
                </p>

                <div>

                    <a>
                        MyPatientHUB
                    </a>

                    <a>
                        About Us
                    </a>

                    <a>
                        Blog
                    </a>

                </div>

            </footer>


        </div>
    );
}