import line from '../../assets/banner/Line-Design.svg';
const AddJewelry = () => {
    const CategoryEnum = {
        Necklaces: 'Necklaces',
        Rings: 'Rings',
        Bracelets: 'Bracelets',
        Earrings: 'Earrings',
        Anklets: 'Anklets',
        Brooches: 'Brooches',
        Cufflinks: 'Cufflinks',
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

    return (
        <div className="py-32">
            <h1 className="text-center font-bold text-2xl text-[#832729]">Add New Products</h1>
            <img src={line} alt="" />
            <div>
                <form className="shadow-xl p-5 rounded-md md:w-8/12 mx-auto">
                    <div className=" flex justify-center">
                        <div className="w-full md:mr-10">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Name:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="title"
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Images:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="images"
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
                                    <option value={CategoryEnum.Earrings}>{CategoryEnum.Earrings}</option>
                                    <option value={CategoryEnum.Anklets}>{CategoryEnum.Anklets}</option>
                                    <option value={CategoryEnum.Brooches}>{CategoryEnum.Brooches}</option>
                                    <option value={CategoryEnum.Cufflinks}>{CategoryEnum.Cufflinks}</option>
                                    <option value={CategoryEnum.Watches}>{CategoryEnum.Watches}</option>
                                </select>
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="priority">
                                    Material:
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="category"
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
                        </div>
                        <div className="w-full">
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Price:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="title"
                                    required="required"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                                    Supplier:
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    name="supplier"
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
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                                    Description:
                                </label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="description"
                                    required="required"
                                />
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