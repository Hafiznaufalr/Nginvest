import React, { Component } from 'react';
class Main extends Component {
    render() {
        return (
            <main>
                <h2 className="subtitle">Apa itu Nginvest?</h2>
                <p className="intro">Nginvest Merupakan website yang bertujuan untuk membantu UMKM dalam menemukan Investor agar bisa terus mengembangkan usahanya.
          Sehingga terjadi hal yang saling menguntungkan dan saling membantu.</p>

                <div className="cards-container">
                    <div className="card-left">
                        <img alt="gambar" src="./assets/umkm.png" />
                        <p className="title">UMKM</p>
                        <p>UMKM disini sebagai penerima dana dari Investor. Karena sebenarnya banyak sekali UMKM dari Indonesia yang sangat kreatif namun mereka terhambat dikarenakan modal/biaya.</p>
                    </div>

                    <div className="card-right">
                        <img alt="gambar" src="./assets/investor.png" />
                        <p className="title">Investor</p>
                        <p>Investor disini sebagai pemberi dana/modal.Investor ini bisa memanfaatkan uang yang yang lebih untuk di investasikan dan mendapat keuntungan berupa bagi hasil tanpa harus melakukan apapun.</p>
                    </div>
                </div>

                <h2 className="subtitle">Keuntungan Menggunakan Nginvest</h2>
                <div className="floats-container trigger">

                    <img alt="gambar" src="./assets/inklusif.png" />
                    <p><b>Inklusif</b> Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>

                </div>


                <div className="floats-container-reverse">
                    <img alt="gambar" className="c" src="./assets/mendapat modal.png" />
                    <p className="d"><b>Mudah Mendapat Dana</b> Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>

                </div>


                <div className="floats-container">

                    <img alt="gambar" src="./assets/cepat.png" />
                    <p><b>Proses Cepat</b> Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>

                </div>

                <div className="floats-container-reverse">

                    <img alt="gambar" className="c" src="./assets/keuntungan.png" />
                    <p><b>Keuntungan Tinggi</b> Nullam aliquam, orci nec eleifend pellentesque, libero felis sodales velit, dictum vestibulum leo tortor in ex. Curabitur risus massa, fringilla at sapien non, volutpat malesuada elit. Cras a ligula vitae purus suscipit rhoncus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut ipsum ante, suscipit at erat ac, mattis faucibus nisl.</p>

                </div>


                <div>
                    <p className="title-last">Tunggu Apalagi Ayo Segera Coba Nginvest!</p>
                    <button className="sign-up" type="button">Coba</button>
                </div>


                <footer>
                    <ul>
                        <li><a >by 3NITY with love</a></li>
                        <li><a >Terms of Use</a></li>
                        <li><a>Privacy Policy</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                    <ul>

                        <li><a ><i className="fab fa-facebook-f"></i></a></li>
                        <li><a ><i className="fab fa-twitter"></i></a></li>
                        <li><a ><i className="fab fa-google-plus-g"></i></a></li>
                        <li><a ><i className="fab fa-google-play"></i></a></li>
                    </ul>
                </footer>
            </main>
        );
    }
}

export default Main;
