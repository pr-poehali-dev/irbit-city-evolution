import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const historicalPeriods = [
  {
    year: '1631',
    title: 'Основание Ирбита',
    description: 'Основание острога на реке Ирбит, начало истории города как торгового центра.',
    image: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/724cbd69-d10c-413a-acd0-6baf5efe9e25.jpg'
  },
  {
    year: '1775',
    title: 'Статус города',
    description: 'Ирбит получает статус города, развивается торговля и ремёсла.',
    image: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/3101e3ac-0c59-4bf3-8b72-80434a8c151b.jpg'
  },
  {
    year: '1850',
    title: 'Расцвет ярмарки',
    description: 'Ирбитская ярмарка становится одной из крупнейших в России.',
    image: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/0d5f24d3-4e16-47c7-a9f4-e6e83e958073.jpg'
  },
  {
    year: '1900',
    title: 'Промышленное развитие',
    description: 'Появление первых промышленных предприятий, развитие инфраструктуры города.',
    image: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/724cbd69-d10c-413a-acd0-6baf5efe9e25.jpg'
  }
];

const galleryImages = [
  {
    url: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/724cbd69-d10c-413a-acd0-6baf5efe9e25.jpg',
    title: 'Улицы старого Ирбита',
    year: '1890-е'
  },
  {
    url: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/3101e3ac-0c59-4bf3-8b72-80434a8c151b.jpg',
    title: 'Торговая площадь',
    year: '1905'
  },
  {
    url: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/0d5f24d3-4e16-47c7-a9f4-e6e83e958073.jpg',
    title: 'Промышленные кварталы',
    year: '1910-е'
  },
  {
    url: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/724cbd69-d10c-413a-acd0-6baf5efe9e25.jpg',
    title: 'Ярмарочный день',
    year: '1880-е'
  },
  {
    url: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/3101e3ac-0c59-4bf3-8b72-80434a8c151b.jpg',
    title: 'Городская застройка',
    year: '1895'
  },
  {
    url: 'https://cdn.poehali.dev/projects/92007331-e9e9-4b6f-b047-ed0a7f448150/files/0d5f24d3-4e16-47c7-a9f4-e6e83e958073.jpg',
    title: 'Железнодорожная станция',
    year: '1915'
  }
];

const historicalPlaces = [
  {
    id: 1,
    name: 'Ирбитская ярмарка',
    year: '1643',
    description: 'Одна из крупнейших ярмарок Российской империи',
    x: 35,
    y: 45
  },
  {
    id: 2,
    name: 'Спасская церковь',
    year: '1702',
    description: 'Старейший каменный храм города',
    x: 50,
    y: 40
  },
  {
    id: 3,
    name: 'Торговые ряды',
    year: '1776',
    description: 'Центр торговой жизни Ирбита',
    x: 42,
    y: 52
  },
  {
    id: 4,
    name: 'Железнодорожная станция',
    year: '1916',
    description: 'Начало железнодорожного сообщения',
    x: 65,
    y: 55
  },
  {
    id: 5,
    name: 'Городская управа',
    year: '1823',
    description: 'Административный центр города',
    x: 48,
    y: 35
  }
];

export default function Index() {
  const [selectedPeriod, setSelectedPeriod] = useState(0);
  const [selectedPlace, setSelectedPlace] = useState<number | null>(null);

  return (
    <div className="min-h-screen vintage-texture">
      <header className="border-b-4 border-primary/30 bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-5xl md:text-7xl font-bold text-primary text-center tracking-wide">
            Ирбит
          </h1>
          <p className="text-center text-muted-foreground mt-2 text-lg">
            Путешествие сквозь века
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <Tabs defaultValue="timeline" className="w-full">
          <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-3 mb-12 h-14">
            <TabsTrigger value="timeline" className="text-lg">
              <Icon name="Clock" className="mr-2" size={20} />
              Главная
            </TabsTrigger>
            <TabsTrigger value="map" className="text-lg">
              <Icon name="MapPin" className="mr-2" size={20} />
              Карта
            </TabsTrigger>
            <TabsTrigger value="gallery" className="text-lg">
              <Icon name="Image" className="mr-2" size={20} />
              Фотогалерея
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="animate-fade-in">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
                Историческая хронология
              </h2>
              <p className="text-center text-muted-foreground text-lg">
                Ключевые вехи развития города с XIX по XX век
              </p>
            </div>

            <div className="relative max-w-6xl mx-auto">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary/30 hidden md:block" />

              <div className="space-y-12">
                {historicalPeriods.map((period, index) => (
                  <div
                    key={index}
                    className={`flex flex-col md:flex-row gap-8 items-center ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    } animate-fade-in`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="w-full md:w-5/12">
                      <Card
                        className="photo-border sepia-filter overflow-hidden cursor-pointer hover:scale-105 transition-transform duration-300"
                        onClick={() => setSelectedPeriod(index)}
                      >
                        <img
                          src={period.image}
                          alt={period.title}
                          className="w-full h-64 object-cover"
                        />
                      </Card>
                    </div>

                    <div className="hidden md:flex md:w-2/12 justify-center">
                      <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center border-4 border-background shadow-lg">
                        <span className="text-primary-foreground font-bold text-sm">
                          {period.year}
                </span>
                      </div>
                    </div>

                    <div className="w-full md:w-5/12">
                      <Card className="p-6 bg-card/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 transition-colors">
                        <div className="flex items-center gap-2 mb-3 md:hidden">
                          <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                            <span className="text-primary-foreground font-bold text-xs">
                              {period.year}
                            </span>
                          </div>
                          <h3 className="text-2xl font-bold text-foreground">
                            {period.title}
                          </h3>
                        </div>
                        <h3 className="text-3xl font-bold text-foreground mb-3 hidden md:block">
                          {period.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {period.description}
                        </p>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="map" className="animate-fade-in">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
                Карта исторических мест
              </h2>
              <p className="text-center text-muted-foreground text-lg">
                Важнейшие объекты в истории Ирбита
              </p>
            </div>

            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <Card className="p-8 bg-card/90 border-2 border-primary/20">
                    <div className="relative w-full aspect-[4/3] bg-secondary/30 rounded-lg overflow-hidden">
                      <svg viewBox="0 0 100 100" className="w-full h-full">
                        <rect x="0" y="0" width="100" height="100" fill="hsl(var(--secondary))" opacity="0.3" />
                        <path d="M 20,30 Q 30,20 50,35 T 80,40" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" opacity="0.4" />
                        <path d="M 30,60 Q 50,50 70,65" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="none" opacity="0.4" />
                        <circle cx="50" cy="50" r="25" fill="hsl(var(--accent))" opacity="0.1" />
                        
                        {historicalPlaces.map((place) => (
                          <g
                            key={place.id}
                            className="cursor-pointer transition-transform hover:scale-110"
                            onClick={() => setSelectedPlace(place.id)}
                          >
                            <circle
                              cx={place.x}
                              cy={place.y}
                              r={selectedPlace === place.id ? "2.5" : "2"}
                              fill="hsl(var(--primary))"
                              stroke="hsl(var(--background))"
                              strokeWidth="0.5"
                            />
                            <circle
                              cx={place.x}
                              cy={place.y}
                              r="4"
                              fill="hsl(var(--primary))"
                              opacity="0.2"
                              className="animate-pulse"
                            />
                          </g>
                        ))}
                      </svg>
                      
                      <div className="absolute top-4 left-4 bg-card/90 px-3 py-2 rounded border border-primary/20">
                        <p className="text-xs text-muted-foreground">Ирбит, XIX-XX вв.</p>
                      </div>
                    </div>
                  </Card>
                </div>

                <div className="space-y-4">
                  {historicalPlaces.map((place) => (
                    <Card
                      key={place.id}
                      className={`p-4 cursor-pointer transition-all duration-300 ${
                        selectedPlace === place.id
                          ? 'border-2 border-primary bg-primary/5'
                          : 'border border-primary/20 hover:border-primary/40'
                      }`}
                      onClick={() => setSelectedPlace(place.id)}
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                          <Icon name="MapPin" size={16} className="text-primary-foreground" />
                        </div>
                        <div>
                          <h3 className="font-bold text-foreground mb-1">
                            {place.name}
                          </h3>
                          <p className="text-xs text-muted-foreground mb-2">
                            {place.year}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {place.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="gallery" className="animate-fade-in">
            <div className="max-w-4xl mx-auto mb-12">
              <h2 className="text-4xl font-bold text-center mb-4 text-foreground">
                Фотоархив
              </h2>
              <p className="text-center text-muted-foreground text-lg">
                Уникальные снимки Ирбита XIX-XX веков
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {galleryImages.map((image, index) => (
                <Card
                  key={index}
                  className="photo-border sepia-filter overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-4 bg-card/90">
                    <h3 className="font-bold text-lg mb-1 text-foreground">
                      {image.title}
                    </h3>
                    <p className="text-sm text-muted-foreground flex items-center gap-2">
                      <Icon name="Calendar" size={16} />
                      {image.year}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="border-t-4 border-primary/30 bg-card/80 backdrop-blur-sm mt-20">
        <div className="container mx-auto px-4 py-8 text-center">
          <p className="text-muted-foreground">
            Исторический портал города Ирбит • XIX-XX века
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Сохраняя память о прошлом для будущих поколений
          </p>
        </div>
      </footer>
    </div>
  );
}