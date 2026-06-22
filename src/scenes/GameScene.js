export class GameScene extends Phaser.Scene {
    constructor() {
        super("GameScene");
    }

    create() {
        const width = this.scale.width;
        const height = this.scale.height;

        // Фон
        this.cameras.main.setBackgroundColor("#3e6b3f");

        // Заголовок
        this.add.text(width / 2, 60, "KINGDOMS OF ASH", {
            fontSize: "40px",
            color: "#ffffff",
            fontStyle: "bold"
        }).setOrigin(0.5);

        // Версия
        this.add.text(width / 2, 110, "Prototype v0.1.0", {
            fontSize: "22px",
            color: "#dddddd"
        }).setOrigin(0.5);

        // Заглушка карты
        this.add.rectangle(width / 2, height / 2 + 40, 700, 400, 0x5b8c4d);

        this.add.text(width / 2, height / 2 + 40,
            "Изометрическая карта появится\nна следующем этапе",
            {
                align: "center",
                fontSize: "26px",
                color: "#ffffff"
            }
        ).setOrigin(0.5);
    }
}