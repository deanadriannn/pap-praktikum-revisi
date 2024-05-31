import Authenticated from "@/components/custom/authenticated";
import Notfound from "@/components/ui/notfound";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";


const page = async () => {
    const session = await getServerSession(authOptions);

    const padMar = {
        padding: '0',
        margin: '0',
    }

    const padMarH2 = {
        padding: '0',
        margin: '0',
        color: '#f04f4f',
    }

    const padMarH3 = {
        padding: '0',
        margin: '0',
        fontWeight: '500', 
        color: '#ffaaaa',
    }

    if (session?.user){
        return (
            <>
            
            <Authenticated>
                <h1 className="font-bold text-red-500 text-2xl">Statistik</h1>
                <div className="container" style={{
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between',
                }}>
                    <div className="jumlah" style={{
                         display: 'flex',
                         color: 'white',
                         alignSelf: 'center',
                    }}>
                        <div className="cardz" style={{
                            width: '200px',
                            height: '30%',
                            borderRadius: '10px',
                            backgroundColor: '#F04F4F',
                            padding: '0px 20px 25px 20px',
                        }}>
                            <h4>Jumlah Penduduk</h4>
                            <div className="cardz-content" style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                            <svg width="73" height="43" viewBox="0 0 83 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M56.5909 22.7143C62.8536 22.7143 67.8714 17.6414 67.8714 11.3571C67.8714 5.07286 62.8536 0 56.5909 0C50.3282 0 45.2727 5.07286 45.2727 11.3571C45.2727 17.6414 50.3282 22.7143 56.5909 22.7143ZM26.4091 22.7143C32.6718 22.7143 37.6895 17.6414 37.6895 11.3571C37.6895 5.07286 32.6718 0 26.4091 0C20.1464 0 15.0909 5.07286 15.0909 11.3571C15.0909 17.6414 20.1464 22.7143 26.4091 22.7143ZM26.4091 30.2857C17.6186 30.2857 0 34.715 0 43.5357V53H52.8182V43.5357C52.8182 34.715 35.1995 30.2857 26.4091 30.2857ZM56.5909 30.2857C55.4968 30.2857 54.2518 30.3614 52.9314 30.475C57.3077 33.655 60.3636 37.9329 60.3636 43.5357V53H83V43.5357C83 34.715 65.3814 30.2857 56.5909 30.2857Z" fill="white"/>
                            </svg>
                            <h2>275,5 JT</h2>
                            </div>
                        </div>
                        <div className="cardz" style={{
                            marginLeft: '15px',
                            width: '200px',
                            height: '30%',
                            borderRadius: '10px',
                            backgroundColor: '#F04F4F',
                            padding: '0px 20px 25px 20px',
                            }}>
                            <h4>Jumlah Pulau</h4>
                            <div className="cardz-content" style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                            <img src="../icons/statistik-page/island.svg" />
                            <h2>17.001</h2>
                            </div>
                        </div>
                        <div className="cardz" style={{
                            marginLeft: '15px',
                            width: '200px',
                            height: '30%',
                            borderRadius: '10px',
                            backgroundColor: '#F04F4F',
                            padding: '0px 20px 25px 20px',
                            }}>
                            <h4>Jumlah Provinsi</h4>
                            <div className="cardz-content" style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}>
                            <svg width="59" height="59" viewBox="0 0 59 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.5 3.6875C19.3213 3.6875 11.0625 11.1213 11.0625 20.2812C11.0625 35.0312 29.5 55.3125 29.5 55.3125C29.5 55.3125 47.9375 35.0312 47.9375 20.2812C47.9375 11.1213 39.6787 3.6875 29.5 3.6875ZM29.5 29.5C28.0414 29.5 26.6155 29.0675 25.4027 28.2571C24.1899 27.4467 23.2446 26.2949 22.6864 24.9473C22.1282 23.5997 21.9821 22.1168 22.2667 20.6862C22.5513 19.2556 23.2537 17.9415 24.2851 16.9101C25.3165 15.8787 26.6306 15.1763 28.0612 14.8917C29.4918 14.6071 30.9747 14.7532 32.3223 15.3114C33.6699 15.8696 34.8217 16.8149 35.6321 18.0277C36.4425 19.2405 36.875 20.6664 36.875 22.125C36.8729 24.0803 36.0952 25.9549 34.7126 27.3376C33.3299 28.7202 31.4553 29.4979 29.5 29.5Z" fill="white"/>
                            </svg>
                            <h2>38</h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="canvassCardPemilih" style={{
                    borderRadius: '10px',
                    padding: '20px',
                    color: '#F04F4F',
                    width: '25%',
                    backgroundColor: 'white',
                }}>
                    <h2 style = {{
                        padding: '0',
                        margin: '0',
                    }}>Statistik Pemilih</h2>
                    <canvas id="statistikPemilih"></canvas>
                </div>
                <div style={{display: 'flex'}}>

                    <div className="canvassCardProvinsi" style={{
                        marginTop: "30px",
                        borderRadius: "10px",
                        padding: '20px',
                        backgroundColor: 'white',
                        width: '29%'
                    }}>
                        <h2 style={ padMarH2 }>Statistik Provinsi</h2>
                        <h3 style={ padMarH3 }>Di Pulau Sumatera</h3>
                        <canvas id="statistikProvinsi"></canvas>
                    </div>
            
        
                    <div className="canvassCardProvinsi" style={{
                        marginLeft: '15px',
                        marginTop: "30px",
                        borderRadius: "10px",
                        padding: '20px',
                        backgroundColor: 'white',
                        width: '29%'
                        }}>
                        <h2 style={ padMarH2 }>Statistik Provinsi</h2>
                        <h3 style={ padMarH3 }>Di Pulau Jawa</h3>
                        <canvas id="statistikProvinsi2"></canvas>
                    </div>
            
        
                    <div className="canvassCardProvinsi" style={{
                        marginLeft: '15px',
                        marginTop: "30px",
                        borderRadius: "10px",
                        padding: '20px',
                        backgroundColor: 'white',
                        width: '29%'
                        }}>
                        <h2 style={ padMarH2 }>Statistik Provinsi</h2>
                        <h3 style={ padMarH3 }>Di Pulau Sulawesi</h3>
                        <canvas id="statistikProvinsi3"></canvas>
                    </div>
                </div>

            </Authenticated>
            </>
        );
    } else {
        return (
            <Notfound/>
        )
    }
        
}

export default page