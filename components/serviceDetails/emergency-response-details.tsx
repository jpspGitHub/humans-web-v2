import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, MapPin, Award, Users, Heart, Brain, Shield, AlertCircle } from "lucide-react"

export function EmergencyResponseDetails() {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto space-y-16">

                    {/* Curso de Primeros Auxilios Básico */}
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-primary font-title flex items-center gap-2">
                                    Curso de Primeros Auxilios Básico
                                </h2>
                            </div>
                            <Badge variant="secondary" className="w-fit text-sm py-1 px-3">
                                Decreto 330 Ley 18.360
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-600">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary-accent" />
                                <span><strong>Duración:</strong> 4 horas 30 minutos</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary-accent" />
                                <span><strong>Modalidad:</strong> Presencial / 100% práctico e interactivo</span>
                            </div>
                        </div>

                        <p className="text-lg text-neutral-700 leading-relaxed">
                            Aprendé a actuar en los primeros minutos que hacen la diferencia. Este curso es la base ideal para cualquier persona que quiera estar preparada para intervenir con seguridad ante una emergencia, ya sea en su casa, trabajo o comunidad.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <Brain className="w-5 h-5 text-primary-accent" />
                                        ¿Qué vas a aprender?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                                        <li>Cómo evaluar una situación y actuar sin poner en riesgo tu seguridad</li>
                                        <li>Uso correcto del botiquín y primeros pasos ante cualquier emergencia</li>
                                        <li>Maniobras de reanimación cardiopulmonar (RCP) en adultos</li>
                                        <li>Uso del Desfibrilador Externo Automático (DEA)</li>
                                        <li>Asistencia en casos de asfixia (OVACE), convulsiones, síncope, ACV y SCA</li>
                                        <li>Control de hemorragias y heridas</li>
                                        <li>Abordaje de quemaduras térmicas, químicas o eléctricas</li>
                                        <li>Reacciones alérgicas severas y anafilaxia</li>
                                        <li>Picaduras de insectos y mordeduras (incluso de ofidios en entornos agrestes)</li>
                                        <li>Prevención y actuación ante caídas, golpes, fracturas y traumatismos</li>
                                        <li>Qué hacer en casos de golpes de calor, hipotermia y deshidratación</li>
                                    </ul>
                                </CardContent>
                            </Card>

                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <Users className="w-5 h-5 text-primary-accent" />
                                        ¿A quién está dirigido?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-neutral-600 mb-4">A cualquier persona sin formación previa. Ideal para:</p>
                                    <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                                        <li>Instituciones educativas</li>
                                        <li>Empresas (todos los rubros)</li>
                                        <li>Clubes, hoteles, gimnasios</li>
                                        <li>Emprendedores, familias, cuidadores/as</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                    </div>

                    {/* Curso de Primeros Auxilios para Niños y Niñas */}
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-primary font-title">
                                    Curso de Primeros Auxilios para Niños y Niñas
                                </h2>
                            </div>
                            <Badge variant="outline" className="w-fit text-sm py-1 px-3 border-primary-accent text-primary-accent">
                                Diploma Simbólico
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-neutral-600">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary-accent" />
                                <span><strong>Duración:</strong> 60 min</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary-accent" />
                                <span><strong>Edad:</strong> 7 a 12 años</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <MapPin className="w-4 h-4 text-primary-accent" />
                                <span><strong>Espacio:</strong> Escolar</span>
                            </div>
                        </div>

                        <p className="text-lg text-neutral-700 leading-relaxed">
                            Porque también pueden salvar vidas. Este taller está pensado para que niños y niñas aprendan lo esencial: cómo pedir ayuda, cómo actuar con calma y cómo protegerse ante una emergencia. Todo en un lenguaje claro, respetuoso y completamente práctico.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <Brain className="w-5 h-5 text-primary-accent" />
                                        ¿Qué aprenden?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                                        <li>Cómo activar el sistema de emergencias: qué decir, cómo pedir ayuda</li>
                                        <li>Qué es y cómo aplicar la Posición Lateral de Seguridad</li>
                                        <li>Qué hacer si alguien se cae, se golpea o se desmaya</li>
                                        <li>Maniobras básicas de RCP (sin ventilación) adaptadas a su edad</li>
                                        <li>Qué hacer si un compañero se atraganta (versión testigo: pedir ayuda y avisar)</li>
                                        <li>Cómo cuidarse a sí mismos y a otros, sin ponerse en riesgo</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <Heart className="w-5 h-5 text-primary-accent" />
                                        ¿Cómo se enseña?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                                        <li>Juego de roles: ¿qué harías si…?</li>
                                        <li>Prácticas guiadas con maniquíes adaptados</li>
                                        <li>Activación simulada del 911</li>
                                        <li>Ejercicios en colchonetas: posición lateral, simulaciones suaves</li>
                                        <li>Acompañamiento con materiales visuales y ejemplos del día a día</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg">
                            <h4 className="font-bold text-primary mb-2 flex items-center gap-2">
                                <Award className="w-5 h-5 text-primary-accent" />
                                Por qué es importante?
                            </h4>
                            <p className="text-sm text-neutral-600 mb-4">
                                Porque actuar a tiempo no es solo cosa de adultos. Este taller fortalece la confianza, el trabajo en equipo y el sentido de responsabilidad en niñas y niños.
                            </p>
                            <p className="text-sm font-semibold text-primary">
                                Ideal para: Escuelas primarias, Clubes deportivos, Campamentos educativos, Actividades extracurriculares.
                            </p>
                        </div>
                    </div>

                    {/* Curso de RCP y Uso del DEA */}
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-primary font-title">
                                    Curso de RCP y Uso del DEA (Ley 18.360)
                                </h2>
                            </div>
                            <Badge variant="secondary" className="w-fit text-sm py-1 px-3">
                                Decreto 330 – Ley 18.360
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-600">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary-accent" />
                                <span><strong>Duración:</strong> 3 horas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary-accent" />
                                <span><strong>Modalidad:</strong> 100% práctico</span>
                            </div>
                        </div>

                        <p className="text-lg text-neutral-700 leading-relaxed">
                            Actuar rápido puede salvar una vida. Este curso te brinda las herramientas necesarias para intervenir en los primeros minutos ante una emergencia cardíaca. Aprendé a reconocer un paro, realizar maniobras de RCP y utilizar un DEA de manera eficaz, segura y dentro del marco legal vigente.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <Brain className="w-5 h-5 text-primary-accent" />
                                        ¿Qué vas a aprender?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                                        <li>Cómo reconocer una parada cardiorrespiratoria</li>
                                        <li>Maniobras completas de Reanimación Cardiopulmonar (RCP) en adultos</li>
                                        <li>Uso correcto del Desfibrilador Externo Automático (DEA) paso a paso</li>
                                        <li>Qué hacer hasta que llega el equipo de emergencia</li>
                                        <li>Recomendaciones legales según el Decreto 330 / Ley 18.360</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <Shield className="w-5 h-5 text-primary-accent" />
                                        Por qué hacerlo?
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-sm text-neutral-600">
                                        Porque saber usar un DEA y hacer RCP puede triplicar las chances de supervivencia ante un paro cardíaco. Este curso te prepara para actuar de inmediato, con seguridad y confianza.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg">
                            <p className="text-sm font-semibold text-primary mb-2">
                                Ideal para: Empresas que buscan espacios cardioprotegidos, Equipos de trabajo con atención al público, Instituciones educativas, deportivas o recreativas.
                            </p>
                            <p className="text-sm text-neutral-600 italic">
                                Este curso es parte del programa de capacitación obligatorio para espacios cardioprotegidos. Consultanos para incluirlo en tu empresa, club o institución.
                            </p>
                        </div>
                    </div>

                    {/* Curso de Soporte Vital Básico (SVB) */}
                    <div className="space-y-6">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b pb-4">
                            <div>
                                <h2 className="text-2xl font-bold text-primary font-title flex items-center gap-2">
                                    Curso de Soporte Vital Básico (SVB) y Primeros Auxilios Avanzados
                                </h2>
                            </div>
                            <Badge variant="secondary" className="w-fit text-sm py-1 px-3">
                                Certificación Nacional e Internacional
                            </Badge>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-neutral-600">
                            <div className="flex items-center gap-2">
                                <Clock className="w-4 h-4 text-primary-accent" />
                                <span><strong>Duración:</strong> 6, 16 o 24 horas</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-primary-accent" />
                                <span><strong>Modalidad:</strong> Presencial – 20% teórico / 80% práctico</span>
                            </div>
                        </div>
                        <p className="text-lg text-neutral-700 leading-relaxed">
                            Formate como Primer Respondiente. Este entrenamiento te prepara para tomar el control en los minutos más críticos. Aprendé a evaluar, asistir y estabilizar a víctimas en situaciones reales, bajo presión y con criterio técnico. Incluye prácticas intensivas, simulaciones realistas y abordaje integral de emergencias.
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <AlertCircle className="w-5 h-5 text-primary-accent" />
                                        Evaluación primaria y atención inicial (XABCDE)
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                                        <li>Examen rápido y seguro de la víctima</li>
                                        <li>Evaluación y control de hemorragias severas</li>
                                        <li>Manejo de la vía aérea con y sin dispositivos</li>
                                        <li>Evaluación Respiratoria y cardiologica</li>
                                        <li>Evaluación neurológica básica (Glasgow, pupilas, respuesta motora)</li>
                                        <li>Evaluación secundaria completa</li>
                                    </ul>
                                </CardContent>
                            </Card>
                            <Card className="bg-light-neutral border-none shadow-sm">
                                <CardHeader>
                                    <CardTitle className="text-lg flex items-center gap-2 text-primary">
                                        <Shield className="w-5 h-5 text-primary-accent" />
                                        Técnicas avanzadas
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2 text-sm text-neutral-600 list-disc pl-4">
                                        <li>Restricción de la movilidad espinal y empaquetamiento</li>
                                        <li>Uso de collar cervical, férulas y tablas rígidas</li>
                                        <li>Extracción segura de casco de moto y movilización de víctimas</li>
                                        <li>Intervención en espacios confinados, zonas agrestes o de difícil acceso</li>
                                        <li>Simulación de rescates y evacuación de heridos</li>
                                        <li>Protocolos para múltiples víctimas</li>
                                    </ul>
                                </CardContent>
                            </Card>
                        </div>

                        <div className="bg-white border border-neutral-200 rounded-lg p-6 shadow-sm">
                            <h4 className="font-bold text-primary mb-4">Niveles disponibles</h4>
                            <div className="space-y-3">
                                <div className="flex items-start gap-3">
                                    {/* <span className="text-xl">🟡</span> */}
                                    <div>
                                        <strong className="text-primary">Nivel 1 (6 horas):</strong>
                                        <span className="text-neutral-600 text-sm ml-1">SVB + evaluación primaria + RCP + DEA</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    {/* <span className="text-xl">🟠</span> */}
                                    <div>
                                        <strong className="text-primary">Nivel 2 (16 horas):</strong>
                                        <span className="text-neutral-600 text-sm ml-1">Evaluación primaria + secundaria + control de hemorragias + inmovilización + simulaciones prácticas</span>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    {/* <span className="text-xl">🔴</span> */}
                                    <div>
                                        <strong className="text-primary">Nivel 3 (24 horas):</strong>
                                        <span className="text-neutral-600 text-sm ml-1">Entrenamiento intensivo + escenarios complejos + extracción + simulacros grupales + rescate en espacios hostiles</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-primary/5 p-6 rounded-lg">
                            <p className="text-sm text-neutral-600">
                                <strong>¿Cuándo?</strong> Abrimos varias fechas al año, en diferentes modalidades y ubicaciones. Consultá por disponibilidad o pedí tu curso para grupos cerrados.
                            </p>
                            <p className="text-sm text-neutral-600 mt-2">
                                Adaptamos el contenido según el contexto: medio acuático, urbano, rural o de riesgo operativo.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
