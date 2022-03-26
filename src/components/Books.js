import ItemBook from './ItemBook';
import Form from './Form';

const Books = () => (
  <section className="container">
    <div>
      <ItemBook
        title="The Hunger Games"
        author="Suzanne Collins"
        categories="Action"
      />
      <ItemBook
        title="The Name of the Rose"
        author="Umberto Eco"
        categories="Novel"
      />
      <ItemBook
        title="Capital in the Twenty-First Century"
        author="Suzanne Collins"
        categories="Economy"
      />
    </div>
    <Form />
  </section>
);

export default Books;
