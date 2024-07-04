import Maps from "@/components/maps";
import { Input } from "@/components/ui/input";

interface ContactProps {}
const Contact: React.FC< ContactProps> = ({}) => {
  return (
    <div>
      <Maps/>
      <div>Envie uma mensagem</div>
      <div>Formulario aqui</div>
      <Input placeholder="Nome" /> 
      <Input placeholder="Email" /> 
      <Input placeholder="Mensagem" /> 
    </div>
  );
};

export default Contact;