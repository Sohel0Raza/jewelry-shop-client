import { Link } from "react-router-dom";
import { AiFillDelete,AiTwotoneEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import useAllJewelry from "../../hooks/useAllJewelry";

const MyJewelry = ({ item ,index}) => {
  const { _id, sellerName, jewelryName, category, price } = item;
const [,,refetch] = useAllJewelry()
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://sparkle-gems-server-jnaiufrlc-sohel0raza.vercel.app/allJewelry/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
             refetch()
            }
          });
      }
    });
  };
  return (
    <tbody>
      <tr className="text-lg">
        <td>{index}</td>
        <td>{sellerName}</td>
        <td>{jewelryName}</td>
        <td>{category}</td>
        <td>$ {price}</td>
        <div className="space-x-4 mt-3">
          <Link to={`/updateJewelry/${_id}`}>
            <button className="p-1 rounded-md hover:bg-[#b4c6dc] text-2xl hover:text-white">
              <AiTwotoneEdit />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="p-1 rounded-md hover:btn-error hover:text-white text-2xl"
          >
            <AiFillDelete />
          </button>
        </div>
      </tr>
    </tbody>
  );
};

export default MyJewelry;