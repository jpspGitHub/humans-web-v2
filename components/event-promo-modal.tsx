"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, MapPin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const storageKey = "cirea-2026-promo-seen";

export function EventPromoModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (Date.now() >= Date.parse("2026-11-10T00:00:00-03:00")) return;
    // try { if (sessionStorage.getItem(storageKey)) return } catch {}
    const timer = window.setTimeout(() => setOpen(true), 900);
    return () => window.clearTimeout(timer);
  }, []);

  function dismiss() {
    setOpen(false);
    try {
      sessionStorage.setItem(storageKey, "true");
    } catch {}
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(value) => {
        if (!value) dismiss();
      }}
    >
      <DialogContent
        className="w-[calc(100%-2rem)] max-w-2xl gap-0 overflow-hidden rounded-2xl border-0 p-0 [&>button]:bg-white [&>button]:p-1 [&>button]:text-primary"
        onCloseAutoFocus={(event) => {
          event.preventDefault();
          document.getElementById("site-home-link")?.focus();
        }}
      >
        <div className="max-h-[85dvh] overflow-y-auto">
          <div className="bg-primary px-6 pb-5 pt-8 sm:px-8">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-200">
              Primera edición internacional · Uruguay 2026
            </p>
            <Image
              src="/eventos/cirea-2026.jpg"
              alt="Presentación de CIREA 2026 en La Paloma"
              width={1100}
              height={619}
              className="w-full rounded-lg"
            />
          </div>
          <div className="p-6 sm:p-8">
            <DialogTitle className="font-title text-2xl leading-tight text-primary sm:text-3xl">
              El mar nos une. La preparación también.
            </DialogTitle>
            <DialogDescription className="mt-3 text-base leading-relaxed text-slate-600">
              Campamento Internacional de Rescate y Emergencias Acuáticas.
              Cuatro días de formación, práctica y encuentro con referentes de
              cinco países.
            </DialogDescription>
            <div className="my-5 flex flex-wrap gap-x-5 gap-y-2 text-sm font-medium text-primary">
              <span className="flex items-center gap-2">
                <CalendarDays className="h-4 w-4" />6 al 9 de noviembre
              </span>
              <span className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                La Paloma, Rocha
              </span>
            </div>
            <Button
              asChild
              size="lg"
              className="w-full bg-primary-accent-700 text-white hover:bg-primary-accent-800"
            >
              <Link href="/eventos/cirea-2026" onClick={dismiss}>
                Conocer el evento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            {/* <button
              onClick={dismiss}
              className="mt-4 w-full rounded py-2 text-sm text-slate-600 underline underline-offset-4"
            >
              Seguir explorando HUMAN
            </button> */}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
