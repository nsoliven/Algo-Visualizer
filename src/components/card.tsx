type CardProps = {
  card_name: string;
  card_text: string;
};

const CardStyle1 = ({ card_name, card_text }: CardProps) => (
  <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <img className="w-full" src="https://placehold.co/600x400" alt="Placeholder image" />
    <div className="px-6 py-4">
      <div className="font-bold text-xl mb-2">{card_name}</div>
      <p className="text-gray-700 text-base">{card_text}</p>
    </div>
  </div>
);

export default CardStyle1;
