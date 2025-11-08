import { Navbar } from "@/components/Navbar";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">About PureOil Mill</h1>
          
          <Card className="mb-8">
            <CardContent className="pt-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Welcome to PureOil Mill, where tradition meets quality. For over three generations, 
                we've been crafting the finest cold-pressed oils using time-honored methods and 
                modern sustainability practices.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Our commitment to excellence begins with sourcing the highest quality organic ingredients 
                from trusted local farms. Every bottle is a testament to our dedication to purity, 
                flavor, and nutritional value.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We believe in transparency, sustainability, and delivering products that not only 
                taste exceptional but also contribute to your well-being and our planet's health.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To provide the purest, most flavorful oils while maintaining sustainable 
                  practices and supporting local agriculture.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Quality, sustainability, transparency, and community are at the heart 
                  of everything we do.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
