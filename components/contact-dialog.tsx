import { ContactForm } from "./contact-form";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog";

type ContactDialogProps = {
    isOpen: boolean;
    onClose: () => void;
};

export function ContactDialog() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant={"ghost"}>Kontaktirajte nas</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="mb-4">
                    <DialogTitle>Kontaktirajte nas</DialogTitle>
                </DialogHeader>
                <ContactForm />
            </DialogContent>
        </Dialog>
    );

};