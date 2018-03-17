var ViewModel = function() {
    this.clickCount = ko.observable(0);
    this.name = ko.observable('Jinko');
    this.imgsrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.imgAttribution = ko.observable('https://www.glickr.com/photos/');
    
    this.incrementCounter = function() {
        this.clickCount(this.clickCount() + 1);
    };
}

ko.applyBindings(new ViewModel());