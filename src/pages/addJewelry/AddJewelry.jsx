import { useContext } from 'react';
import line from '../../assets/banner/Line-Design.svg';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
const AddJewelry = () => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const from = "/allJewelry"
    const CategoryEnum = {
        Necklaces: 'Necklaces',
        Rings: 'Rings',
        Bracelets: 'Bracelets',
        Earrings: 'Earrings',
        Chain: 'Chain',
        NosePins: 'Nose Pins',
        Anklets: 'Anklets',
        Brooches: 'Brooches',
        Watches: 'Watches',
    };
    const MaterialEnum = {
        Gold24K: 'Gold 24K',
        Gold18K: 'Gold 18K',
        Gold14K: 'Gold 14K',
        Gold10K: 'Gold 10K',
        Silver: 'Silver',
        Platinum: 'Platinum',
        WhiteGold: 'White Gold',
        RoseGold: 'Rose Gold',
    };
    const handleAddJewelry = (e) => {
        e.preventDefault()
        const form = e.target
        const jewelryName = form.jewelryName.value
        const image = form.image.value
        const category = form.category.value
        const material = form.material.value
        const weight = form.weight.value
        const itemAvailability = form.itemAvailability.checked
        const price = parseFloat(form.price.value)
        console.log('price :', price);
        const sellerEmail = form.sellerEmail.value
        const sellerName = form.sellerName.value
        const description = form.description.value
        const newJewelry = { sellerName, sellerEmail, jewelryName, image, price, category, material,weight, itemAvailability, description }

        fetch("http://localhost:5000/allJewelry", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newJewelry)
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "New Jewelry Added Successfully",
                        icon: "success",
                        confirmButtonText: "OK",
                    });
                }
                form.reset()
                navigate(from, {replace:true})
            });
    }
    return (
        <div className="py-32">
            <h1 className="text-center font-bold text-2xl text-[#832729]">Add New Products</h1>
            <img src={line} alt="" />
            <div>
                <form onSubmit={handleAddJewelry} className="shadow-xl p-5 rounded-md md:w-8/12 mx-auto">
                    <div className=" flex justify-center">
                        <div className="w-full md:mr-10">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Jewelry  Name:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="jewelryName"
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Images Url:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="image"
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                                    Category:
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="category"
                                    required="required"
                                >
                                    <option disabled selected value="">Select Category </option>
                                    <option value={CategoryEnum.Necklaces}>{CategoryEnum.Necklaces}</option>
                                    <option value={CategoryEnum.Rings}>{CategoryEnum.Rings}</option>
                                    <option value={CategoryEnum.Bracelets}>{CategoryEnum.Bracelets}</option>
                                    <option value={CategoryEnum.Chain}>{CategoryEnum.Chain}</option>
                                    <option value={CategoryEnum.NosePins}>{CategoryEnum.NosePins}</option>
                                    <option value={CategoryEnum.Earrings}>{CategoryEnum.Earrings}</option>
                                    <option value={CategoryEnum.Anklets}>{CategoryEnum.Anklets}</option>
                                    <option value={CategoryEnum.Brooches}>{CategoryEnum.Brooches}</option>
                                    <option value={CategoryEnum.Watches}>{CategoryEnum.Watches}</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                                    Material:
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="material"
                                    required="required"
                                >
                                    <option disabled selected value="">Select Material</option>
                                    <option value={MaterialEnum.Gold24K}>{MaterialEnum.Gold24K}</option>
                                    <option value={MaterialEnum.Gold18K}>{MaterialEnum.Gold18K}</option>
                                    <option value={MaterialEnum.Gold14K}>{MaterialEnum.Gold14K}</option>
                                    <option value={MaterialEnum.Gold10K}>{MaterialEnum.Gold10K}</option>
                                    <option value={MaterialEnum.Silver}>{MaterialEnum.Silver}</option>
                                    <option value={MaterialEnum.Platinum}>{MaterialEnum.Platinum}</option>
                                    <option value={MaterialEnum.WhiteGold}>{MaterialEnum.WhiteGold}</option>
                                    <option value={MaterialEnum.RoseGold}>{MaterialEnum.RoseGold}</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Weight:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="weight"
                                    placeholder='Weight Gram'
                                    required="required"
                                />
                            </div>


                        </div>
                        <div className="w-full">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Price USD$:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="number"
                                    name="price"
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Supplier Email:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="email"
                                    name="sellerEmail"
                                    value={user?.email}
                                    required="required"
                                />
                            </div>

                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Supplier Name:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="sellerName"
                                    value={user?.displayName}
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Description:
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="description"
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Availability:
                                </label>
                                <div className="flex items-center">
                                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" required="required" name="itemAvailability" />
                                    <span className="ml-2 text-gray-700">In Stock</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button
                            type="submit"
                            className="btn-secondary px-4"
                        >
                            Add Jewelry
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddJewelry;