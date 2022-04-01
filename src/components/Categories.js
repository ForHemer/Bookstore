import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const status = useSelector((state) => (state.categoriesReducer.status));

  const check = () => {
    dispatch(checkStatus());
  };

  return (
    <section className="categories-container">
      <button type="button" className="check-status" onClick={check}>Check status</button>
      <h2>{status}</h2>
    </section>
  );
};

export default Categories;
