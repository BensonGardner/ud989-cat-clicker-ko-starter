var Cat = function() {

    this.clickCount = ko.observable(0);
    this.level = ko.computed(function() {
        if (this.clickCount() < 10) {
            return 'Infant';
        } else if (this.clickCount() < 50) {
            return 'Kitten';
        } else {
            return 'Established cat'; 
        };
    }, this);
    this.name = ko.observable('Jinko');
    this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
    this.imgAttribution = ko.observable('https://www.glickr.com/photos/');
    this.nicknames = [
        {nickname: 'Hezrah'},
        {nickname: 'Herberty'},
        {nickname: 'Steve-O'},
        {nickname: 'Pawer'}
    ];
    
}

var ViewModel = function() {

    this.currentCat = ko.observable( new Cat() );
    
    this.incrementCounter = function() {
        this.currentCat().clickCount(this.currentCat().clickCount() + 1);
        console.log(this.currentCat().clickCount());
    };
}

ko.applyBindings(new ViewModel());
