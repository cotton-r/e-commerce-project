CREATE TABLE users (
  user_id SERIAL PRIMARY KEY,
  name varchar(50) NOT NULL,
  email varchar(50) UNIQUE NOT NULL,
  password varchar(15) NOT NULL,
  created_date TIMESTAMP,
  modified_date TIMESTAMP
);

CREATE TABLE categories (
  category_name varchar(30) PRIMARY KEY
);

CREATE TABLE products (
  product_id SERIAL PRIMARY KEY,
  category_name varchar(30) REFERENCES categories(category_name),
  product_name varchar(200),
  description varchar(2000),
  image varchar(1000),
  price numeric(12,2)
);

CREATE TABLE cart (
  id SERIAL PRIMARY KEY,
  user_id INTEGER REFERENCES users(user_id) ON DELETE CASCADE,
  product_id INTEGER REFERENCES products(product_id),
  item_qty INTEGER DEFAULT 1
);

INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (1, 'boots', 'Nike Phantom GT2 Elite FG', 'Building off the Phantom GT, the Nike Phantom GT2 Elite FG features an updated design and raised patterning to help create optimal spin to control the flight of the ball. Off-centre lacing provides a clean strike zone for skilful dribbling, passing and shooting.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631300985/e-commerce/phantom-gt2-elite-fg-football-boot-CbSK2V_o8syjy.jpg', 224.95);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (2, 'boots', 'Nike Mercurial Superfly 8 Academy MG', 'The Nike Mercurial Superfly 8 Academy MG sets you up for speed with specialised traction for quick cuts and sudden stops. Grippy texture on top gives you precise control of the ball, and a stretchy collar adapts to your ankle for a seamless fit that moves with you.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631313087/e-commerce/mercurial-superfly-8-academy-mg-multi-ground-football-boot-6rZwRP_cq7iye.jpg', 79.95);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (3, 'boots', 'X SPEEDFLOW+ FG', 'From brain to boot to ball. And back again. When sharpness of mind meets quickness of body, you become the fastest version of yourself. Find your flow and leave the rest behind. Whatever "speed" means to you, these adidas X football boots keep you out in front. For the sprinter, a Carbitex carbon fibre insert and raised forefoot spark explosive propulsion. For the wizard, a stabilising Agilitycage straps you in for jinking runs. For the fox-in-the-box, the laceless adidas Primeknit skin adds comfort while you wait to strike.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631313235/e-commerce/X_SPEEDFLOW__FG_Black_FY3342_01_standard_swxvxp.jpg', 230.00);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (4, 'boots', 'ULTRA 3.3.FG/AG Mens Football Boots', 'Heralding a new generation of speed, the ULTRA 3.3 boots are the weapon of choice on firm or artificial ground. These lightweight mesh shoes with internal SPEEDCAGE are fused to PUMAs ultra fast SpeedUnit outsole with running-spike DNA at their core. The GripControl skin delivers decisive power on the ball to ensure you hit the back of the net every time.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631313399/e-commerce/AG-Men_s-Football-Boots_e2h9om.jpg', 70.00);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (5, 'boots', 'FUTURE Z 1.1 Lazertouch FG/AG Mens Football Boots', 'Inject a touch of flair to your football style with the performance and standout style of our FUTURE Z 1.1 Lazertouch FG/AG Football Boots. This revolutionary football boot breaks the mould with our FusionFit+ Adaptive midfoot compression bend to provide superior lockdown and Dynamic Motion System designed to transfer your energy directly to the pitch for superior traction.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631313505/e-commerce/AG-Men_s-Football-Boots_1_nzqeuc.jpg', 190.00);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (6, 'footballs', 'Nike Strike', 'The Nike Strike Football features grooves designed for consistent spin when the ball is in the air. The durable casing and rubber bladder combine for long-lasting performance.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631317108/e-commerce/strike-football-GwgpLV_siqutv.jpg', 22.95);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (7, 'footballs', 'Nike English Premier League 2021/22 Strike Football', 'Be a baller on the pitch when you us this English Premier League Strike Football from Nike. Coming in a White colourway with a bold Hyper Crimson and Black pattern, this ball is made from a durable rubber bladder that holds its shape, while a textured casing offers premium grip and touch when on the move. Featuring a 12-panel design with Aerow Trac grooves that offers consistent flight and spin, this ball is signed off with signature Swoosh logos and the Premier League badge.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631318755/e-commerce/jd_455060_b_bmwq2w.webp', 25.00);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (8, 'footballs', 'adidas UEFA Champions League Final 2021 Football', 'Show off your skills on the pitch with this UEFA Champions League Final 2021 Football from adidas. In a Cloud White, Solar Red and Solar Yellow colourway in the iconic star pattern, this football is made from bouncy TPU for premium touch and control. It features a Butyl bladder to reduce deflation and is reduced in weight for comfortable play. This ball is finished off with adidas and Champions Leagaue branding throughout.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631318949/e-commerce/jd_455108_a_nwchdi.webp', 18.00);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (9, 'kits', 'F.C. Barcelona', 'Rep your team in the F.C. Barcelona Top. Its made from microfibre fabric that helps keep sweat off your skin so you stay dry, focused and moving ahead of kick-off.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631321301/e-commerce/fc-barcelona-short-sleeve-football-top-GW2sTD_qb37y5.jpg', 49.95);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (10, 'kits', 'Paris Saint-Germain 2021/22 Stadium Home', 'The Paris Saint-Germain Stadium Home Shirt features highly breathable fabric to help keep sweat off your skin while you cheer for your team.This product is made from 100% recycled polyester fibres.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631325414/e-commerce/paris-saint-germain-2021-22-stadium-home-football-shirt-BB0S4g_m164ed.jpg', 69.95);
INSERT INTO products (product_id, category_name, product_name, description, image, price) VALUES (11, 'kits', '2021/22 ASTON VILLA HOME SHIRT', 'Show your pride and support on or off the pitch with the Aston Villa home shirt. Featuring Hydro-Way Protection tech and a regular fit for greater day to day comfort it also features all the classic detailing you would expect from Villas own home shirt, great whether you are playing the game yourself or just cheering the team on at Villa Park.', 'https://res.cloudinary.com/dmylytdb6/image/upload/v1631325613/e-commerce/20210717_121917_480x_sat0ow.jpg', 50.00);
