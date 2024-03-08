let getBackgroundImageUrl = () => {
    const backgroundImages = [
        "https://images.unsplash.com/photo-1429516387459-9891b7b96c78?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHwyMzZ8fHx8fHx8MTcwODU4NzQyNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHwyMzZ8fHx8fHx8MTcwODU4NzQyNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
        "https://images.unsplash.com/photo-1457064497232-4d1be099e908?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHwyMzZ8fHx8fHx8MTcwODU4NzQzNg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
        "https://images.unsplash.com/photo-1496645809762-c5a2c8e07043?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHwyMzZ8fHx8fHx8MTcwODU4NzQ1Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
        "https://images.unsplash.com/photo-1440557653082-e8e186733eeb?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHwyMzZ8fHx8fHx8MTcwODU4NzQ2Mw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
        "https://images.unsplash.com/photo-1502856755506-d8626589ef19?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1080&ixid=MnwxfDB8MXxyYW5kb218MHwyMzZ8fHx8fHx8MTcwODU4NzQ3NA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1920",
    ];
    return backgroundImages[
        Math.floor(Math.random() * (backgroundImages.length ))
    ];
};
document.body.style.backgroundImage = `url('${getBackgroundImageUrl()}')`;