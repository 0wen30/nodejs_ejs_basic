export const home = (req,res) => {
    res.render("index",{title:"My first website"});
};

export const about = (req,res) => {
    res.render("about");
};

export const contact = (req,res) => {
    res.render("contact");
};