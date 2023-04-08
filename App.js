import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("h1", { id: "parent" }, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "I am h1 Tag"), React.createElement("h1", {}, "i m h1 tag")]));



const element = React.createElement("div", { id: "container" },
    [
        React.createElement("h1", {}, "Hello Ashish"), React.createElement("h2", {}, "Hello Ashish"),
        React.createElement("h3", {}, "Hello Ashish")
    ]
)

const jsxElement = <div>
    <h1 className="title">Hello H1 jsx</h1>
    <h2 className="title">Hello H2</h2>
    <h3 className="title">Hello H3 jsx</h3>
</div>

// function component

const HeadingComponent = () => {
    return (
        <div id="container">
            <h1 className="title">Hello H1 fuction component</h1>
            <h2 className="title">Hello H2 fuction component</h2>
            <h3 className="title">Hello H3 fuction component</h3>
        </div>
    )
}

const para = <p id="para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati exercitationem atque ratione praesentium dolorum, culpa blanditiis dolores corporis omnis deleniti, cum temporibus rerum sed enim non numquam ipsa beatae recusandae! </p>

const HeadingComponent2 = () => (
    <div id="container">
        {/* this called as component composition */}
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        {para}
        <h1 className="title">Hello H1 fuction component without return</h1>
        <h2 className="title">Hello H2 fuction component without return</h2>
        <h3 className="title">Hello H3 fuction component without return</h3>
    </div>
)

//

const HeaderComponent = () => {
    return (
        <header id="header" >
            <div className="logo">
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F1%2F12%2FSwiggy_logo.svg%2F2560px-Swiggy_logo.svg.png&tbnid=Y6T0JMqpgu7exM&vet=12ahUKEwjNhta435n-AhWl-XMBHT78B3UQMygAegUIARDjAQ..i&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3ASwiggy_logo.svg&docid=GbtDo_9sduHSlM&w=2560&h=765&q=swiggy%20logo&ved=2ahUKEwjNhta435n-AhWl-XMBHT78B3UQMygAegUIARDjAQ" />
            </div>

            <div className="search">
                <input type="search" />
            </div>

            <div>
                <img src="https://icons.veryicon.com/png/o/miscellaneous/two-color-icon-library/user-286.png" alt="" />
            </div>
        </header>
    )
}



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeaderComponent />);   