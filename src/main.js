zebra.ready(function () {
    var canvas = new zebra.ui.zCanvas(400, 700);

    canvas.root.setLayout(new zebra.layout.BorderLayout(8));
    canvas.root.add(zebra.layout.CENTER, new zebra.ui.TextArea(""));
    canvas.root.add(zebra.layout.BOTTOM, new zebra.ui.Button("Clean"));
});
