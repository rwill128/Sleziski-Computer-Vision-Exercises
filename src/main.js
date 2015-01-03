
zebra.ready(function () {

    var canvas = new zebra.ui.zCanvas(1024, 768);
    

    
    canvas.root.setLayout(new zebra.layout.BorderLayout(8));
    var mainPanel = new MainPanel(new zebra.ui.Panel());
    canvas.root.add(zebra.layout.CENTER, mainPanel);
    canvas.root.add(zebra.layout.BOTTOM, new zebra.ui.Button("Clean"));

});
