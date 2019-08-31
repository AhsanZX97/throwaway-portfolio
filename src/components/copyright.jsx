import React, { Component } from 'react';

export default class Copyright extends Component {
    render() {
        return (
            <section class="copyright py-4 text-center text-white">
                <div class="container">
                    <small>Copyright &copy; Your Website 2019</small>
                </div>

                <div class="scroll-to-top d-lg-none position-fixed ">
                    <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top">
                        <i class="fa fa-chevron-up"></i>
                    </a>
                </div>
            </section>
        )
    }
}