import React, { useEffect, useState } from "react";
import Item from "./Item";
import "./Work.css";

const items = [
    { id: 1, image: "assets/img/webdesign.jpg", title: "Web Design" },
    { id: 2, image: "assets/img/appDev.jpg", title: "App Dev" },
    { id: 3, image: "assets/img/appDev.jpg", title: "App Dev" },
    { id: 4, image: "assets/img/webdesign.jpg", title: "Web Design" },
    { id: 5, image: "assets/img/webDev.jpg", title: "Web Dev" },
    { id: 6, image: "assets/img/webDev.jpg", title: "Web Dev" },
    { id: 7, image: "assets/img/webdesign.jpg", title: "Web Design" },
    { id: 8, image: "assets/img/webDev.jpg", title: "Web Dev" },
];

function Work() {
    const [filter, setFilter] = useState("All");
    const [filteredItems, setFilteredItems] = useState();
    useEffect(() => {
        setFilteredItems(items);
    }, []);

    useEffect(() => {
        if (filter === "All")
            setFilteredItems(items.map((x) => ({ ...x, filtered: true })));
        else {
            setFilteredItems([]);
            const filtered = items.map((x) => ({
                ...x,
                filtered: x.title.includes(filter),
            }));
            setFilteredItems(filtered);
        }
    }, [filter]);

    return (
        <section className="work section" id="work">
            <span className="section__subtitle">My Portfolio</span>
            <h2 className="section__title">Recent Works</h2>
            <div className="work__filters">
                <span
                    className={
                        filter === "All"
                            ? "work__item active__work"
                            : "work__item"
                    }
                    onClick={(e) => setFilter("All")}
                >
                    All
                </span>
                <span
                    className={
                        filter === "Web Design"
                            ? "work__item active__work"
                            : "work__item"
                    }
                    onClick={(e) => setFilter("Web Design")}
                >
                    Web Design
                </span>
                <span
                    className={
                        filter === "Web Dev"
                            ? "work__item active__work"
                            : "work__item"
                    }
                    onClick={(e) => setFilter("Web Dev")}
                >
                    Web Dev
                </span>
                <span
                    className={
                        filter === "App Dev"
                            ? "work__item active__work"
                            : "work__item"
                    }
                    onClick={(e) => setFilter("App Dev")}
                >
                    App Dev
                </span>
            </div>
            <div className="work__container app__container grid">
                {filteredItems &&
                    filteredItems.length > 0 &&
                    filteredItems.map((x) =>
                        x.filtered === true ? (
                            <Item key={x.id} image={x.image} title={x.title} />
                        ) : null
                    )}
            </div>
        </section>
    );
}

export default Work;
