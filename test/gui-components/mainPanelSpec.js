describe('A main panel', function() {
    var panel;
    beforeEach(function() {
        panel = new MainPanel({})
    });
    it('should add a new rectangle to the list when mouse drag started is called.', function() {
        panel.mouseDragStarted({ax: 5, ay: 5})
        expect(panel.rectangles.length).toBe(1);
    });
});