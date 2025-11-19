import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChefHat,
  Users,
  BookOpen,
  Heart,
  Target,
  Award,
  Mail,
} from "lucide-react";
import { Link } from "react-router";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import chef1Image from "@/assets/chef-1.jpg";
import chef2Image from "@/assets/chef-2.jpg";
import chef3Image from "@/assets/chef-3.jpg";

const team = [
  {
    name: "Carlos Silva",
    role: "Chef Executivo",
    image: chef1Image,
    description: "20 anos de experiência em culinária internacional",
  },
  {
    name: "Ana Oliveira",
    role: "Nutricionista",
    image: chef2Image,
    description: "Especialista em alimentação saudável e balanceada",
  },
  {
    name: "Pedro Santos",
    role: "Food Designer",
    image: chef3Image,
    description: "Fotógrafo e criador de conteúdo culinário",
  },
];

const faqs = [
  {
    question: "Como posso enviar minha receita?",
    answer:
      "Clique no botão 'Enviar Receita' no menu principal. Você precisará criar uma conta gratuita e preencher o formulário com os ingredientes, modo de preparo e uma foto do prato.",
  },
  {
    question: "As receitas são testadas?",
    answer:
      "Sim! Nossa equipe de chefs e cozinheiros caseiros testa cada receita antes de publicá-la para garantir que as instruções estejam claras e o resultado seja delicioso.",
  },
  {
    question: "Posso salvar receitas favoritas?",
    answer:
      "Com uma conta gratuita, você pode salvar suas receitas favoritas e até compartilhar suas próprias criações com a comunidade.",
  },
  {
    question: "Vocês tem receitas para dietas especiais?",
    answer:
      "Sim! Temos filtros para dietas vegetarianas, veganas, sem glúten e outras restrições alimentares. Use os filtros na página de categorias para encontrar receitas adequadas.",
  },
  {
    question: "É gratuito usar o site?",
    answer:
      "Sim! O ReceitasOnline é 100% gratuito. Você pode acessar todas as receitas, salvar favoritos e enviar suas próprias receitas sem nenhum custo.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/20 via-background to-primary/20 py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-full mb-6">
            <Heart className="w-12 h-12 text-primary" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Sobre o ReceitasOnline
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Conectamos pessoas apaixonadas por culinária através de receitas
            testadas e aprovadas. Nosso objetivo é tornar a cozinha acessível,
            divertida e deliciosa para todos, afinal quem não gosta de comer não
            é mesmo?!
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="hover:shadow-md py-0">
            <CardContent className="p-8">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa Missão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Democratizar a culinária através de receitas acessíveis e bem
                explicadas, inspirando pessoas a cozinhar em casa e criar
                momentos especiais com a família.
              </p>
            </CardContent>
          </Card>
          <Card className="hover:shadow-md py-0">
            <CardContent className="p-8">
              <div className="inline-flex p-3 bg-primary/10 rounded-lg mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Nossa Visão
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Ser a maior comunidade de receitas em português, onde chefs
                profissionais e cozinheiros caseiros compartilham conhecimento e
                paixão pela boa comida.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <Users className="w-12 h-12 text-primary mx-auto mb-3" />
              <span className="block text-4xl font-bold text-foreground mb-2">
                2.500+
              </span>
              <span className="block text-muted-foreground">
                Usuários Ativos
              </span>
            </div>
            <div>
              <BookOpen className="w-12 h-12 text-primary mx-auto mb-3" />
              <span className="block text-4xl font-bold text-foreground mb-2">
                212
              </span>
              <span className="block text-muted-foreground">Receitas</span>
            </div>
            <div>
              <ChefHat className="w-12 h-12 text-primary mx-auto mb-3" />
              <span className="block text-4xl font-bold text-foreground mb-2">
                15
              </span>
              <span className="block text-muted-foreground">
                Chefs Parceiros
              </span>
            </div>
            <div>
              <Heart className="w-12 h-12 text-primary mx-auto mb-3" />
              <span className="block text-4xl font-bold text-foreground mb-2">
                98%
              </span>
              <span className="block text-muted-foreground">Satisfação</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Nossa Equipe
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Profissionais apaixonados por culinária dedicados a trazer as
            melhores receitas para você
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="hover:shadow-md py-0">
              <CardContent className="p-6 text-center">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-primary/20">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-1">
                  {member.name}
                </h4>
                <p className="text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground text-sm">
                  {member.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-muted/40 py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Perguntas Frequentes
            </h3>
            <p className="text-muted-foreground">
              Tire suas dúvidas sobre como usar a plataforma
            </p>
          </div>
          <Accordion type="single" collapsible className="w-full space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-item-${index}`}
                className="bg-background border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="hover:no-underline cursor-pointer">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CallToAction Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-br from-primary/10 to-primary/10 border-primary/20">
          <CardContent className="p-12 text-center">
            <Mail className="w-16 h-16 text-primary mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Pronto para Compartilhar Suas Receitas?
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Junte-se à nossa comunidade e inspire outras pessoas com suas
              criações culinárias. É rápido, fácil e totalmente gratuito!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="text-lg px-8">
                <Link to={"/registrar"}>Criar Conta Gratuita</Link>
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Link to={"/"}>Ver Receitas</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default About;

